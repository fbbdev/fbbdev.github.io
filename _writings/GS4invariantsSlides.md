---
title: On the semantics of proofs in classical sequent calculus
excerpt: |
  Slides of my talk at the Logic seminar of the Department of Mathematics
  at Roma Tre University, in Rome, Italy (June 16th, 2023)
category: talks
date: 20230616

links:
  - type: slides
    url: /writings/downloads/GS4invariantsSlides.pdf
---

|**Authors:** | Fabio Massaioli |
|**Language:**| English         |

These are the slides accompanying the talk I gave within the Logic seminar of the Department
of Mathematics at Roma Tre University, in Rome, Italy, on June 16<sup>th</sup>, 2023. The
content of the talk originated from some [unpublished notes](GS4invariants). It is essentially
the same work I presented at the ASL Logic Colloquium in Milan, but the slides are much more
detailed.

## Abstract

I recall briefly the peculiar features of cut-reduction procedures in classical
sequent calculus and the challenges they pose to the development of a satisfying
notion of proof semantics. A common approach in the literature has been to adopt
techniques like polarization or embeddings into intuitionistic or linear logic,
which solve the difficulties by breaking the simmetry of the cut-reduction
procedure.

In this talk I shall explore an alternative approach that refrains from breaking
symmetry, based upon the idea of tracking the presence of axioms pairing atomic
formula occurrences in the conclusion of a proof. A first unrefined formulation
fails to be invariant under cut-reduction, but the counter-examples suggest
that the difficulty is related to the invertibility of conjunctions. This
observation warrants a move to the negative formulation of classical
propositional sequent calculus — also known as GS4 — where all parallel logical
rule applications permute freely and the structural rules are implicit.

I introduce a refined interpretation of GS4 derivations and show that it is
preserved under arbitrary permutations of logical rules; then I exploit those
permutations to define a global normalization procedure that preserves the
interpretation (partially based on a normalization-by-evaluation technique),
thus yielding a non-trivial invariant of cut-elimination in GS4. The invariants
can be presented as a graphical proof-system, akin to proof-nets, enjoying a
polynomial time correctness criterion and very good properties.

Finally, I discuss the shortcomings of this approach and assess its ability to
solve the problems described at the beginning of the talk.
