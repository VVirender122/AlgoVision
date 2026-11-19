# AlgoVision — Project Blueprint

## 1. Overview

AlgoVision is an interactive platform for learning Data Structures and Algorithms through visualization, execution inspection, and conceptual explanations.

It connects three perspectives:

- **Visual:** What happens during algorithm execution?
- **Execution:** How do variables, operations, and control flow change?
- **Conceptual:** Why does the algorithm work, and what is its complexity?

AlgoVision is designed to be more than an algorithm animation tool. Its goal is to help learners understand algorithms deeply.

## 2. Core Principles

1. Algorithms must remain independent of the UI.
2. Execution must produce structured, inspectable events.
3. Execution must be deterministic and testable.
4. Playback must support forward, backward, seeking, and replay.
5. Visualizations and inspectors must derive from the same execution state.
6. Components should have focused responsibilities.
7. New algorithms should be addable without rewriting the execution engine.

## 3. Technology Stack

- React
- TypeScript
- Vite
- SVG and CSS for visualizations
- Vitest for testing (planned)

## 4. High-Level Architecture

### Engine

Responsible for algorithm execution infrastructure.

- **Events:** Structured descriptions of execution actions.
- **Execution:** Runs algorithms and collects traces.
- **History:** Stores and accesses execution history.
- **Playback:** Navigates through recorded execution.

The engine must not depend on React, the DOM, CSS, or browser APIs.

### Algorithms

Contains individual algorithm implementations.

Initial categories:

- Sorting
- Searching

Algorithms operate on input data and produce execution events.

### Visualizers

Convert execution state into visual representations, such as array bars, pointers, highlighted elements, and data structures.

### Modules

Organize learning experiences around DSA topics.

### Components

Contain reusable interface components.

### App

Contains application entry points and high-level composition.

### Types

Contains shared TypeScript contracts and domain types.

### Utils

Contains small reusable utilities that do not belong to a specific subsystem.

## 5. Initial Repository Structure

```text
AlgoVision/
├── src/
│   ├── engine/
│   │   ├── events/
│   │   ├── execution/
│   │   ├── history/
│   │   └── playback/
│   ├── algorithms/
│   │   ├── sorting/
│   │   └── searching/
│   ├── visualizers/
│   ├── modules/
│   ├── components/
│   ├── app/
│   ├── types/
│   └── utils/
├── tests/
└── docs/
```

Directories should be expanded only when a concrete responsibility requires them.

## 6. Execution Model

The initial approach:

1. Receive an algorithm and its input.
2. Execute it on an isolated copy of the input.
3. Generate an ordered sequence of structured events.
4. Store the resulting execution trace.
5. Let the playback controller navigate that trace.
6. Derive visual and inspection state from the selected trace position.

Exact event payloads and state representation will be refined during implementation.

## 7. First Vertical Slice — Bubble Sort

The first complete implementation will use:

```text
[5, 3, 8, 1]
```

The trace should represent events such as:

- Execution started
- Elements compared
- Elements swapped
- Element or range marked sorted
- Execution completed

The first slice must demonstrate:

- Deterministic execution
- Structured event generation
- Trace storage
- Forward playback
- Backward navigation
- Seeking
- Replay
- Unit testing

This slice will validate the architecture before more algorithms are introduced.

## 8. Planned Algorithm Coverage

### Searching

- Linear Search
- Binary Search

### Sorting

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort

### Data Structures

- Arrays
- Stacks
- Queues
- Linked Lists
- Trees
- Graphs

### Advanced Topics

- Recursion
- Backtracking
- Dynamic Programming
- Graph Algorithms

## 9. Development Roadmap

1. Define the event model and typed contracts.
2. Build execution and trace infrastructure.
3. Implement Bubble Sort as the first algorithm.
4. Add playback and history navigation.
5. Build the first visualization and inspection workspace.
6. Add automated tests.
7. Expand algorithm and data-structure coverage.
8. Develop conceptual explanations and learning modules.
9. Refine the complete user interface.

## 10. UI Direction

Detailed UI design is intentionally deferred.

The temporary application shell is only a development placeholder. The final interface should be designed after the execution model and first vertical slice have been validated.

The goal is a cohesive, polished learning workspace rather than a generic dashboard.

## 11. Testing Strategy

Testing should cover:

- Algorithm correctness
- Event ordering and payloads
- Deterministic execution
- Trace consistency
- Playback navigation
- Boundary conditions
- Invalid inputs

The engine and algorithms should be testable without rendering React.

## 12. Immediate Next Step

Begin with `src/engine/events/`.

Define the event model and TypeScript contracts before implementing the execution engine or individual algorithms.