---
layout: project
title: Dot Matrix Bot
excerpt: "A Telegram inline bot for generating dot matrix display GIFs"

links:
    - icon: ion-ios-paperplane-outline
      title: Telegram bot
      label: Telegram bot
      url: https://t.me/dotmtxbot
---
This is a Telegram bot that can be invoked inline (that is while typing a
message, like _@gif_ and _@pic_) to generate scrolling dot matrix display GIFs
with some text, which then you can send to the current chat.

Dot matrix displays look like this:
<figure>
    <img title="A dot matrix display in an underground railway station in Rome, Italy" src="/img/dotmtxbot/metro.jpg">
</figure>

The output of the bot looks like this:
<figure>
    <video autoplay muted loop playsinline disablepictureinpicture disableremoteplayback
        title="A dot matrix display GIF with the scrolling message &ldquo;Hello there&rdquo;">
        <source src="https://dotmtxbot.fbbdev.it/dotmtx.mp4?width=1.3&speed=4&blank=1&text=Hello+there!"
            type="video/mp4">
        <source src="https://dotmtxbot.fbbdev.it/dotmtx.gif?width=1.3&speed=4&blank=1&text=Hello+there!"
            type="image/gif">
    </video>
</figure>

If you [start the bot](https://t.me/dotmtxbot) and type the command `/help`, it
will send you a message explaining how to use it and what are its parameters.
Here is a short video showing the bot in use:
<figure>
    <video controls muted loop style="max-width: 280px;" title="A screen capture showing the bot in use">
        <source src="/img/dotmtxbot/usage.mp4" type="video/mp4">
    </video>
</figure>
