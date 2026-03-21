---
title: Practical AI For Real-World Diagnostics
date: 2026-03-18
slug: practical-ai-real-world-diagnostics
---

### Practical AI for Real-World Diagnostics

There’s no shortage of AI demos that look impressive for thirty seconds.

Ask a question, get a polished answer, move on. It feels smart. It feels fast. And sometimes, it really is useful.

But once you try to build AI into something people might actually rely on—especially in a real-world workflow like automotive diagnostics—you run into a different set of problems.

That’s where this project started to get interesting.

For **WrenchIQ**, I didn’t want AI to be a gimmick layered on top of a car app. I wanted it to be useful. Grounded. Practical. Something that could help a person with an actual vehicle problem move one step closer to a real answer.

That meant the system needed more than a chatbot. It needed context, structure, and constraints.

This is a look at how I built a VIN-based diagnostic assistant using **React Native** and **Supabase**, how the data pipeline works, and a few lessons I learned about using LLMs inside a mobile product without letting them take over the whole thing.

---

### The Goal: Start With the Vehicle, Not a Blank Prompt

A lot of AI experiences begin with an empty text box. That works fine in some contexts, but automotive diagnostics is not one of them.

If someone opens an app because their car is making a noise, won’t start, or is throwing a warning light, the most useful thing you can do is reduce ambiguity as early as possible.

That’s why the workflow starts with the **VIN**.

The VIN gives the app a way to anchor everything that comes next:

* vehicle year
* make and model
* engine or trim context
* compatibility with parts lookup
* a more targeted diagnostic experience

Instead of asking a large language model to reason from a vague prompt like “my car is acting weird,” the system begins with known information about the actual vehicle in front of the user.

That changes the quality of the interaction immediately.

---

### Why React Native + Supabase

The stack choice was pretty straightforward.

**React Native** made sense because the app is mobile-first. This kind of product needs to work where the car is: in a driveway, parking lot, gas station, or roadside shoulder. That means the experience has to be quick, simple, and built around real mobile usage—not desktop assumptions squeezed into a phone.

**Supabase** gave me a practical backend without a lot of unnecessary weight:

* authentication
* database storage
* edge functions
* API-friendly architecture
* room to evolve without standing up a huge backend too early

That combination let me move fast while still building on something structured enough to support real app behavior.

---

### High-Level Architecture

At a high level, the flow looks like this:

1. User scans or enters a VIN
2. Vehicle data is decoded and stored
3. The app uses that vehicle context to shape the diagnostic flow
4. The user describes a symptom or chooses from guided options
5. A backend function prepares a structured prompt
6. The LLM returns guidance, possible causes, and suggested next checks
7. The app displays the result in a way that feels actionable, not magical

That last part matters.

The goal is not to create the illusion that AI “knows” what is wrong with the car. The goal is to help the user narrow possibilities, understand what to inspect next, and feel more confident about what they are looking at.

That’s a very different product philosophy.

---

### The Data Pipeline Matters More Than the Prompt

A lot of people jump straight to prompt-writing when they build with LLMs. Prompts matter, sure. But the real work is upstream.

If the context going into the model is sloppy, vague, or inconsistent, the output will be too.

For a diagnostic workflow, the pipeline matters at least as much as the model call itself.

That means thinking carefully about:

* how VIN data is captured
* how vehicle records are stored
* how symptoms are represented
* how user input is cleaned up before sending it to AI
* how much freedom the model should have in its response

In WrenchIQ, the useful pattern is not “ask the model everything.” It’s closer to:

* collect structured inputs
* add known vehicle context
* constrain the task
* return guidance in a format the app can use

That gives you something much more reliable than a freeform AI conversation with no boundaries.

---

### Guided Input Beats Pure Guesswork

One lesson that became obvious pretty quickly: users are not always going to describe a vehicle problem in a clean, diagnostic-friendly way.

They’ll say things like:

* “it sounds weird”
* “it won’t go right”
* “check engine light and shaking”
* “car kinda dies sometimes”

That’s normal. It’s also where a lot of AI products quietly fail.

If the only input method is a blank box, the model has to do all the interpretation. Sometimes it can. Sometimes it absolutely cannot.

That’s why I like a hybrid approach:

* **guided symptom selection**
* **plus freeform AI-assisted explanation**

The guided side adds structure. The freeform side adds flexibility.

Together, they produce better results than either one alone.

The app can use decision-tree style input to narrow the category of problem first, then let the AI help explain likely causes, next steps, and repair direction in plain language.

That feels much more useful than just asking a model to improvise.

---

### AI as a Tool, Not a Shortcut

This applies both to the user experience and to the development process.

There’s a real temptation right now to treat AI like an all-purpose shortcut machine:

* write the code
* fix the bug
* build the feature
* explain the architecture
* move on

Sometimes it helps. Sometimes it saves a lot of time.

But if you’re just pasting in code because it “looks right,” you’re building on sand.

That approach works right up until it doesn’t—and when it breaks, you’re stuck debugging something you never fully understood in the first place.

The better way to use AI is as a tool for **acceleration and understanding**, not blind delegation.

That means asking things like:

* Why does this solution work?
* What assumptions is it making?
* What happens if this API fails?
* Why is this state structured this way?
* Is this secure, maintainable, and appropriate for mobile?

If AI gives you a block of code, don’t just drop it in and hope. Make it explain itself. Make it justify its choices. Make sure you understand the flow, the dependencies, and the failure paths.

Because “vibe-coding” a real product is fun for about fifteen minutes. After that, it turns into cleanup.

And in a product tied to real diagnostics, broken assumptions are not harmless. They create confusion at exactly the moment the user is looking for clarity.

---

### Reliability Beats Cleverness

This came up over and over again while building the AI-assisted flow.

The flashy version of an LLM product is often the least useful version:

* open-ended answers
* long paragraphs
* high confidence tone
* too much freedom

The practical version is usually smaller and more controlled:

* focused prompts
* limited scope
* clearer formatting
* stronger grounding in known inputs

That may sound less exciting, but it produces a better experience.

For WrenchIQ, the right question is not:

> “What’s the smartest thing the AI can say?”

It’s:

> “What’s the clearest useful help this user can act on right now?”

That shift changes everything.

---

### Mobile Workflow Changes the Design

Building around a mobile workflow also forces a different kind of discipline.

People using a diagnostics app are often:

* standing outside
* distracted
* stressed
* in a hurry
* dealing with bad lighting or weather
* switching between the app and the vehicle

So the output can’t be overly dense. It can’t assume full concentration. And it definitely can’t bury the important action inside five paragraphs of AI-generated throat clearing.

The experience has to be:

* easy to scan
* logically sequenced
* direct about what to check next

That means the architecture is only half the problem. Presentation matters just as much.

A solid backend pipeline with a muddy mobile UX still fails.

---

### What I Learned Building It

A few lessons stood out pretty clearly.

First, vehicle context matters more than general intelligence. A model with better grounding usually beats a model with more freedom.

Second, structured input is not a limitation. It’s often the thing that makes AI output usable.

Third, LLMs are strongest when they support reasoning, not replace it. That’s true for users, and it’s true for developers too.

And finally, practical utility wins.

Not novelty. Not hype. Not the illusion of magic.

Just usefulness.

If a person opens the app with a real problem and leaves with a clearer understanding of what might be wrong, what to check next, and whether they can tackle it themselves, that’s a win.

That’s the standard.

---

### Closing Thought

AI is at its best when it helps people make sense of a messy situation—not when it pretends to eliminate uncertainty altogether.

That’s especially true in automotive diagnostics.

Cars are physical systems. Failures are messy. Symptoms overlap. Context matters. And no language model, no matter how polished, changes that.

But with the right architecture, the right constraints, and the right respect for real-world use, AI can absolutely make diagnostics more approachable.

That’s the direction behind **WrenchIQ**.

Not AI for the sake of AI.
Not copy-paste automation dressed up as engineering.
Not a chatbot pretending to be a mechanic.

Just practical assistance, built to help people understand problems, take the next step, and get a little more confident around their own vehicle.

---
