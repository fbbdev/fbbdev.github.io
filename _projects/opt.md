---
title: opt
excerpt: "Command line argument parsing library for C++14 and later"
category: cpp-libs
ordinal: 300

links:
    - type: docs
      url: https://github.com/fbbdev/opt#readme
    - type: github
      url: https://github.com/fbbdev/opt
---

**opt** is a bare-bones command line argument parsing library for C++14 and later.
It supports a non-standard key-value option style similar to the [dd program](https://linux.die.net/man/1/dd)
from coreutils, or the well-known [iproute2 command suite](https://wiki.linuxfoundation.org/networking/iproute2).
Clever usage of positional and keyword arguments can result in extremely
readable command lines.

The following example shows the command line of a hypothetical tool for running
commands repeatedly at a specified time interval:
```
$ ./run "echo hello" every 500m sec times=10 stop_on_error

    ... if implemented would print 'hello' every 500ms for 10 times ...
```
The [usage example](#usage) below shows how to describe this kind of syntax.
The library generates automatically a usage message:
```
$ ./run help
Usage: ./run [help] [cmd=]COMMAND [mode=](oneshot|after|repeat|every)
  [timeout=]TIMEOUT [unit=](seconds|sec|s|minutes|m|hours|hr|h) [quiet]
  [stop_on_error] [until=TIME] [times=INT]
```

**opt** is distributed under the open source MIT license.

# Argument types

Positional arguments and boolean flags are supported. Numeric values can be
followed by SI unit prefixes (e.g. `2.4k` -> int: 2400, float: 2.4e+3). Supported
types for options are `bool`, `std::string`, `std::string_view`, `std::intmax_t`,
`std::uintmax_t`, `float`, `double`. Enum types and composite types
`std::complex<T>`, `std::array<T, N>`, `std::vector<T>`, `std::set<T>`, are
also supported, where `T` is one of the supported types. Additional types can
be supported by specializing a static method. For more information, [read the
documentation](https://github.com/fbbdev/opt#readme).

# Usage

Option syntax for the hypothetical `run` command shown above can be defined
through the following C++ code:

```c++
#include "opt.hpp"

enum Mode {
    OneShot,
    Repeat,
};

template<>
const opt::Option<Mode>::value_map opt::Option<Mode>::values = {
    { "oneshot", OneShot },
    { "after", OneShot },
    { "repeat", Repeat },
    { "every", Repeat },
};

enum Unit {
    Second,
    Minute,
    Hour,
};

template<>
const opt::Option<Unit>::value_map opt::Option<Unit>::values = {
    { "seconds", Second },
    { "sec", Second },
    { "s", Second },
    { "minutes", Minute },
    { "m", Minute },
    { "hours", Hour },
    { "hr", Hour },
    { "h", Hour },
};

int main(int argc, char* argv[]) {
    using opt::Option;
    using opt::Placeholder;
    using opt::Required;

    Option<opt::StringView> cmd("cmd", Placeholder("COMMAND"), Required);
    Option<Mode> mode("mode", Required);
    Option<float> timeout("timeout", Placeholder("TIMEOUT"), Required);
    Option<Unit> unit("unit", Required);
    Option<bool> quiet("quiet", false);
    Option<bool> stop_on_error("stop_on_error", false);
    Option<float> until("until", Placeholder("TIME"), 0.0f);
    Option<std::uintmax_t> times("times", 0);

    if (!opt::parse({ cmd, mode, timeout, unit },
                    { quiet, stop_on_error, until, times },
                    argv, argv + argc))
        return -1;

    if (!cmd.is_set() || !mode.is_set() ||
            !timeout.is_set() || !unit.is_set()) {
        std::cerr << "error: required options are not set" << std::endl;
        opt::usage(argv[0],
                   { cmd, mode, timeout, unit },
                   { quiet, stop_on_error, until, times });
        return -1;
    }

    /* ... */

    return 0;
}
```
