export type Education = {
  school: string;
  degree: string;
  details: string[];
};

export type Experience = {
  organization: string;
  team: string;
  time: string;
  location: string;
  bullets: string[];
};

export type Publication = {
  title: string;
  venue: string;
  role: string;
  summary: string;
  link: {
    label: string;
    url?: string;
    status: "arxiv" | "external" | "pending";
  };
};

export const profile = {
  name: "Qingyang Liu",
  phone: "(+86) 130-7982-7921",
  email: "narumimaria@sjtu.edu.cn",
  github: "https://github.com/Narumi-Maria",
  avatar: "/pics/avater.jpg",
  titleLines: [
    "Ph.D. in Shanghai Jiao Tong University · Expected 2027.6",
    "Intern in Seed Application General Posttraining (Doubao)",
    "Published 10+ papers at top AI conferences such as ICML, CVPR, ACL, NIPS",
  ],
  keywords: ["VLM", "Post Train", "RL", "Agent"],
};

export const education: Education[] = [
  {
    school: "Beijing Institute of Technology",
    degree: "Bachelor Degree of Computer Science and Technology",
    details: ["GPA: 3.72/4.0"],
  },
  {
    school: "Shanghai Jiao Tong University",
    degree: "Fourth-year Ph.D. student of Computer Science and Technology",
    details: [
      "Department: Institute of Intelligent Human Computer Interaction",
      "Supervisor: Li Niu",
      "Research Interests: AIGC & MLLM & Unified Model & Post Train & RL",
      "GPA: 3.74/4.0",
    ],
  },
];

export const experiences: Experience[] = [
  {
    organization: "ByteDance Seed",
    team: "Application General Posttraining",
    time: "May.2026 - now",
    location: "Beijing",
    bullets: [
      "Worked on post-training for Doubao's general foundation capabilities, focusing on tool-calling, agentic RL, and verifier-based reward modeling. Improved model behavior and user preference satisfaction by refining agent trajectory data, reward signals, tool-use supervision, and evaluation pipelines.",
    ],
  },
  {
    organization: "Tencent WXG",
    team: "Vision Application Team",
    time: "Oct.2025 - May.2026",
    location: "Shenzhen",
    bullets: [
      "Investigated post-training methodologies to bridge the gap between understanding and generation in unified multimodal models. Published at ICML 2026: Breaking Dual Bottlenecks: Evolving Unified Multimodal Models into Self-Adaptive Interleaved Visual Reasoners.",
      "Developed a LangGraph-based video editing agent for wechat channel. Designed a state-checking harness and RenderVid-based benchmark to evaluate intermediate editing states, temporal consistency, and instruction-following quality. Applied agentic RL to distill large-model planning and editing capabilities into smaller models, improving long-horizon tool-use and editing-policy efficiency.",
    ],
  },
  {
    organization: "ByteDance Data",
    team: "Fanqie AI",
    time: "Jun. 2025 - Oct.2025",
    location: "Shanghai",
    bullets: [
      "Investigated the visual understanding capabilities of Multimodal Large Language Models and developed the pioneering MLLM designed for evaluating the quality of short dramas from the perspective of user preferences.",
      "Researched Multimodal Large Models (MLLMs) for content moderation (focusing on vulgar/NSFW content) and AI-generated content detection.",
    ],
  },
  {
    organization: "Tencent TEG",
    team: "AI Platform Department",
    time: "Aug. 2024 - Jun. 2025",
    location: "Shenzhen",
    bullets: [
      "Developed a multimodal scene animation framework that integrates visual, textual, and geometric cues to generate camera-motion-compatible backgrounds for human animation, enabling geometrically consistent videos under controllable camera trajectories. Published at ICASSP 2026: AnimateScene: Camera-controllable Animation in Any Scene.",
      "Built a multimodal retrieval and placement system for game assets, leveraging vision-language models and 3D geometric priors to retrieve semantically matched in-game objects from textual/visual queries and place them in spatially plausible scene locations.",
    ],
  },
  {
    organization: "Alibaba",
    team: "Digital Commerce-Greater Taobao Alimama & Xian Yu",
    time: "Oct.2021 - Aug.2022",
    location: "Beijing",
    bullets: [
      "Explores how redundant multimodal queries (text, audio, and visual cues) can intelligently locate key segments in product introduction videos to generate engaging advertisements. By analyzing cross-modal correlations between user search queries (e.g., repetitive keywords, spoken descriptions, or visual close-ups) and video content, our system identifies the most attention-grabbing moments--such as product demos, price reveals, or emotional appeals--to compile into optimized ad videos.",
    ],
  },
];

export const publications: Publication[] = [
  {
    title:
      "Breaking Dual Bottlenecks: Evolving Unified Multimodal Models into Self-Adaptive Interleaved Visual Reasoners",
    venue: "ICML 2026",
    role: "First Author",
    summary:
      "Proposed and post-trained a unified multimodal model for adaptive X2I reasoning, constructing a 50K+ interleaved dataset across direct generation, reflection, and multi-step planning modes, and applying SFT + GRPO-based RL with step-wise reasoning rewards and complexity penalties to improve visual generation quality and efficiency.",
    link: {
      label: "arXiv:2605.14709",
      url: "https://arxiv.org/abs/2605.14709",
      status: "arxiv",
    },
  },
  {
    title:
      "Bridging Visual Dynamics and Reasoning Evaluation: Multimodal Large Language Models for Short Drama Quality Assessment",
    venue: "WWW 2026",
    role: "First Author",
    summary:
      "We develop the first MLLM for Short Drama Quality Assessment using a two-stage training framework: a Supervised Fine-Tuning (SFT) stage adapts the model to the assessment task, while a Group Relative Policy Optimization (GRPO) stage, using a customized reward function, further aligns its outputs with human preferences.",
    link: {
      label: "Paper Link",
      url: "https://dl.acm.org/doi/abs/10.1145/3774904.3792827",
      status: "external",
    },
  },
  {
    title:
      "Why Struggle with Continuous Latent Space? Discrete Latent Reasoning via Context Render Compression",
    venue: "NeurIPS 2026 Under Review",
    role: "First Author",
    summary:
      "Developed Discrete Latent Reasoning (DLR) for LLaMA-3 and Qwen3-VL, constructing a discrete latent codebook from rendered CoT data via visual compression and vector quantization, then post-training the model with latent-text alignment, SFT, and GRPO-based RL. Built large-scale reasoning datasets from GSM8K-Aug, MATH, and MathX-5M, improving accuracy and efficiency across multiple math reasoning benchmarks while enabling interpretable latent trajectories.",
    link: {
      label: "Paper Link",
      url: "https://github.com/Miraclecsc/Discrete-Latent-Reasoning",
      status: "external",
    },
  },
  {
    title: "Shadow Generation for Composite Image Using Diffusion Model",
    venue: "CVPR 2024",
    role: "First Author",
    summary:
      "We utilize Controlnet to shadow generation task and propose novel intensity module and weighted noise loss to improve performance. Moreover, we extend the small-scale DESOBA dataset to DESOBAv2 using a novel data acquisition pipeline.",
    link: {
      label: "arXiv:2403.15234",
      url: "https://arxiv.org/abs/2403.15234",
      status: "arxiv",
    },
  },
  {
    title: "AnimateScene: Camera-controllable Animation in Any Scene",
    venue: "ICASSP 2026",
    role: "First Author",
    summary:
      "We built a pipeline that takes a background image, a character image, a driving video, and a camera trajectory as input, and generates a highly 3D-consistent video of the character moving within the scene with cinematic camera effects.",
    link: {
      label: "arXiv:2508.05982",
      url: "https://arxiv.org/abs/2508.05982",
      status: "arxiv",
    },
  },
  {
    title: "TiViBench: Benchmarking Think-in-Video Reasoning for Video Generation",
    venue: "CVPR 2026",
    role: "Fourth Author",
    summary:
      "We proposed TiViBench, a hierarchical benchmark to evaluate higher-order reasoning in I2V models across structural, spatial, symbolic, and planning dimensions. We also introduced VideoTPO, a training-free test-time strategy that leverages LLM self-analysis to significantly boost the reasoning performance of video generative models.",
    link: {
      label: "arXiv:2511.13704",
      url: "https://arxiv.org/abs/2511.13704",
      status: "arxiv",
    },
  },
  {
    title:
      "UnicEdit-10M: A Dataset and Benchmark Breaking the Scale-Quality Barrier via Unified Verification for Reasoning-Enriched Edits",
    venue: "CVPR 2026",
    role: "Fourth Author",
    summary:
      "We introduced UnicEdit-10M, a massive 10M-scale image editing dataset generated via an end-to-end pipeline that replaces traditional multi-toolchains for superior scalability and quality. We further proposed UnicBench to provide fine-grained diagnostic insights into the reasoning limitations of both closed-source and open-source models.",
    link: {
      label: "arXiv:2512.02790",
      url: "https://arxiv.org/abs/2512.02790",
      status: "arxiv",
    },
  },
  {
    title: "Unlocking the Black Box of Latent Reasoning: An Interpretability-Guided Approach to Intervention",
    venue: "ACL 2026",
    role: "Fifth Author",
    summary:
      "Proposed a training-free intervention framework for LLM latent reasoning, using CKA-based representation analysis, linear probing, causal editing, and geometric priors to interpret and steer hidden-state reasoning trajectories. Applied decode-time latent-state interventions to Qwen3 and LLaMA models, improving performance on mathematical and commonsense reasoning benchmarks without updating model parameters.",
    link: {
      label: "arXiv:2606.01243",
      url: "https://arxiv.org/abs/2606.01243",
      status: "arxiv",
    },
  },
  {
    title: "HyperET: Efficient Training in Hyperbolic Space for Multi-modal Large Language Models",
    venue: "NeurIPS 2025 Oral",
    role: "Third Author",
    summary:
      "We proposed HyperET, an efficient training paradigm that leverages hyperbolic space to align visual and textual representations across arbitrary granularity levels by dynamically adjusting the hyperbolic radius. We implemented flexible parameterization through Mobius multiplication with specialized matrices, achieving consistent performance gains across multiple MLLM benchmarks with less than 1% additional parameters.",
    link: {
      label: "arXiv:2510.20322",
      url: "https://arxiv.org/abs/2510.20322",
      status: "arxiv",
    },
  },
  {
    title: "Shadow Generation Using Diffusion Model with Geometry Prior",
    venue: "CVPR 2025",
    role: "Second Author",
    summary:
      "We enhance diffusion-based shadow generation by incorporating geometric priors to improve realism. We first predict a rotated bounding box and matched shadow shapes for the foreground object, then inject this geometric guidance into ControlNet for more plausible shadow synthesis.",
    link: {
      label: "Paper Link",
      url: "https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Shadow_Generation_Using_Diffusion_Model_with_Geometry_Prior_CVPR_2025_paper.pdf",
      status: "external",
    },
  },
  {
    title: "Divide and Conquer: Exploring Language-centric Tree Reasoning for Video Question-Answering",
    venue: "ICML 2025",
    role: "Fourth Author",
    summary:
      "We propose a Language-centric Tree Reasoning (LTR) framework to enhance the reasoning ability and interpretability of Multimodal Large Language Models (MLLMs) in VideoQA. LTR decomposes complex questions into simpler sub-questions through a recursive language-centric logical tree, then performs bottom-up reasoning with video evidence to derive traceable answers.",
    link: {
      label: "Paper Link",
      url: "https://dl.acm.org/doi/10.5555/3780338.3781826",
      status: "external",
    },
  },
  {
    title: "D3ToM: Decider-Guided Dynamic Token Merging for Accelerating Diffusion MLLMs",
    venue: "AAAI 2025",
    role: "Third Author",
    summary:
      "We propose a plug-and-play method that uses \"decider tokens\" to create an importance map and dynamically merges redundant visual tokens at each denoising step without altering model parameters. This approach effectively shortens visual token sequences, accelerating inference speeds while maintaining competitive model performance under equivalent computational budgets.",
    link: {
      label: "arXiv:2511.12280",
      url: "https://arxiv.org/abs/2511.12280",
      status: "arxiv",
    },
  },
];
