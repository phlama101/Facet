# Facet Lesson Writing Guide

## The Reader

Write for a curious adult with no prior background in earth science. They are intelligent and motivated but they are encountering these concepts for the first time. They do not know what "asthenosphere" means. They do not know why you think seismic waves are interesting. They have not yet been given a reason to care.

This is the most important thing to hold in mind. The failure mode is not writing something incorrect — it is writing something correct that the reader cannot follow, because you forgot what it felt like not to know it.

---

## The One Rule That Covers Most Problems

**One concept per paragraph.**

If a paragraph introduces a new term, that term gets the full paragraph. It does not share space with a second new term. When you find yourself writing "and this connects to X, which is also related to Y," split it into two paragraphs and write a transition sentence between them.

---

## Term Introduction

**The first time a term appears in prose, define it in the same sentence or the next one.** Do not introduce a term and then define it three sentences later after using it.

✗ Wrong:
> "S-waves disappear beyond 104° from the earthquake. P-waves, by contrast, are compressional waves that pass through both solid and liquid material. S-waves are shear waves."

✓ Right:
> "Earthquakes release two types of waves. **P-waves** (compressional waves) squeeze and expand rock as they travel — they pass through both solid and liquid material. **S-waves** (shear waves) move rock sideways — they can only travel through solid material and stop completely when they hit a liquid."

**Terms introduced in a key-terms panel or concept card count.** If a term is defined in the intro's key-terms list, you may use it freely in the body text of that same lesson. But not before — do not use a term in prose that appears on a card the reader hasn't reached yet.

**Jargon in concept cards and annotations must follow the same rule.** Cards and annotations are not footnotes for experts — they are the reader's first encounter with those details. If "bridgmanite" or "PKIKP" appears in a card, it must be briefly defined within that same card. If you cannot define it briefly and it is not essential, cut it.

---

## Prose Sections (Intro and Concept)

### Intro sections
The intro has one job: make the reader want to continue. It should:
- Open with a question, tension, or surprising fact that the lesson will resolve
- State plainly what the lesson will cover in its final paragraph
- Not repeat content that appears in the callout block, concept section, or key-terms list

The Kola Borehole story is a good hook. Restating it in the callout block that follows is not — the reader just read it. The callout block should add something new, not echo.

### Concept sections
A concept section is a structured explanation, not a summary and not an essay. Structure it explicitly:

1. **Open with the core claim** — what is the one thing this section establishes?
2. **Provide the evidence or mechanism** — how do we know this is true? What does it look like in practice?
3. **Resolve the "so what"** — why does this matter for what comes next?

Each of the three parts above is roughly one paragraph. Longer explanations earn more paragraphs; they do not earn longer paragraphs.

### Transitions are not optional
Every paragraph must earn the next one. The last sentence of a paragraph should either:
- Signal what the next paragraph will address ("But seismology is not the only evidence…"), or
- Create a question the next paragraph answers ("If the mantle flows, why do earthquakes happen there at all?")

Reading the last sentence of one paragraph and the first sentence of the next should feel like a step, not a jump.

---

## Concept Cards

A concept card has four fields: name, one-line description, and examples/evidence. Follow this contract:

**Description (the `desc` field):** One to three sentences. What is it, physically? What are its key properties? Write for the reader who is encountering this concept for the first time. Do not assume they remember the prose section — some readers go straight to the cards.

**Examples (the `examples` field):** Concrete numbers and real-world anchors. Avoid raw jargon here unless it was introduced earlier in the lesson. Good: "~7 km thick under the Pacific." Bad: "~3.0 g/cm³ basaltic mafic composition" on first encounter.

**What does not belong in a card:** Derivations, tangential details, or terms that have not been introduced. If you are writing a parenthetical to explain a term you just used, either define the term properly in the description or remove it.

---

## Visualization Annotations

Annotations are the reader's second read of the same concept after the prose has introduced it. They should deepen, not duplicate. The rule is:

- Prose explains the concept and why it matters
- The annotation provides the specific data — depths, temperatures, percentages — that would have slowed down the prose

Annotations may use technical terms that were introduced in the prose or cards. They may not introduce new terms without defining them.

---

## Quiz Questions and Explanations

The quiz is already well-calibrated. Keep doing what works:

- Wrong answers should be **plausible misconceptions**, not obviously absurd alternatives
- Explanations should address **why each wrong answer is wrong**, not just confirm the right one
- Do not use quiz explanations to introduce concepts that should have appeared in the lesson body

---

## The Word/Concept Ratio

**Simple concepts:** shorter. If a concept is being introduced primarily so the reader recognises the term later, one careful paragraph is enough. Do not pad with historical context or additional examples beyond what the reader needs to identify the thing.

**New and difficult concepts:** longer. If a concept requires the reader to update their mental model (e.g., the mantle is solid but flows; the lithosphere includes part of the mantle), give it the space it needs. Two or three focused paragraphs are better than one paragraph that tries to cover everything at once and leaves the reader behind.

The test: after finishing the section, could a reader explain this concept to a friend in plain language? If the answer is probably not, either the concept needed more space or the explanation needed to be simpler — not both.

---

## Common Pitfalls

| Pattern | Problem | Fix |
|---|---|---|
| Same fact appears in intro and callout block | Wastes the callout block | Callout block adds new data or reframes the point |
| "X, which is related to Y, which connects to Z" in one paragraph | Reader cannot track the logic | One concept per paragraph |
| Term used before it is defined | Reader guessing the meaning | Define in the same sentence |
| Expert shorthand in card examples ("PKIKP", "mafic/felsic", "g/cm³") without prior introduction | Written for someone who already knows | Either introduce the term earlier or replace with plain language |
| Key-takeaways section repeats the same sentences from the concept section | Reads like a copy-paste | Takeaways should crystallise, not repeat — different phrasing, higher-level summary |
| No transition between paragraphs | Reads like bullet points disguised as prose | Write the bridge sentence explicitly |
| Passive voice for mechanisms | Obscures what is doing what | "S-waves cannot pass through liquid" not "liquid material is not traversed by S-waves" |
