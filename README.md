# AlgoVision

**Understand algorithms by seeing, inspecting, and exploring their execution.**

AlgoVision is an interactive learning platform for Data Structures and Algorithms (DSA). It connects algorithm visualization, execution inspection, and conceptual explanations in one learning environment.

## The Three Perspectives

| Perspective | Purpose |
|---|---|
| **Visual** | See how an algorithm transforms data step by step. |
| **Execution** | Inspect variables, operations, comparisons, and control flow. |
| **Conceptual** | Understand why an algorithm works and analyze its complexity. |

## Core Goals

- Interactive algorithm and data-structure visualization.
- Structured and inspectable execution traces.
- Step-by-step execution with forward, backward, seek, and replay controls.
- Clear explanations of algorithm behavior and complexity.
- A modular architecture that supports future algorithms and learning modules.

## Technology Stack

- React
- TypeScript
- Vite
- SVG and CSS
- Vitest (planned)

## Architecture

AlgoVision separates algorithm execution from presentation.

- **Engine:** Execution events, trace generation, history, and playback.
- **Algorithms:** Individual algorithm implementations.
- **Visualizers:** Visual representations of execution state.
- **Modules:** Topic-based learning experiences.
- **Components:** Reusable interface elements.

The execution engine is designed to remain independent of React and browser-specific APIs.

## Development Roadmap

1. Define the execution event model.
2. Build the execution and trace infrastructure.
3. Implement Bubble Sort as the first complete example.
4. Introduce playback and history navigation.
5. Build visualization and inspection panels.
6. Expand algorithm and data-structure coverage.
7. Add conceptual learning modules.
8. Refine the complete user experience.

## Project Documentation

See [PROJECT-BLUEPRINT.md](docs/PROJECT-BLUEPRINT.md) for the architecture, execution model, development principles, and detailed roadmap.

## Running Locally

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/VVirender122/AlgoVision.git
cd AlgoVision
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Project Status

<text>Early development — foundational architecture and execution engine are being established. The current UI is temporary.</text>

## License

License not selected yet.
