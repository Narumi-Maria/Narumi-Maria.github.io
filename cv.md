::: headStart
# Qingyang Liu
(+86) 130-7982-7921 | narumimaria@sjtu.edu.cn
::: headEnd
## EDUCATION
#### Beijing Institute of Technology
*Bachelor Degree of Computer Science and Technology*
- GPA: 3.72/4.0

#### Shanghai Jiao Tong University
*Fourth-year Ph.D. student of Computer Science and Technology*
- Department：Institute of Intelligent Human Computer Interaction

- Supervisor: Li Niu

- Research Interests: AIGC & MLLM & Unified Model & Post Train & RL

- GPA: 3.74/4.0



## Internship Experience

::: start
#### ByteDance Seed
*Application General Posttraining*

:::
*May.2026 - now*
*Beijing*

::: end
- Worked on post-training for Doubao’s general foundation capabilities, focusing on tool-calling, agentic RL, and verifier-based reward modeling. Improved model behavior and user preference satisfaction by refining agent trajectory data, reward signals, tool-use supervision, and evaluation pipelines.


::: start
#### Tencent WXG
*Vision Application Team*

:::
*Oct.2025 - May.2026*
*Shenzhen*

::: end
- Investigated post-training methodologies to bridge the gap between understanding and generation in unified multimodal models. Published at ICML 2026: Breaking Dual Bottlenecks: Evolving Unified Multimodal Models into Self-Adaptive Interleaved Visual Reasoners.

- Developed a LangGraph-based video editing agent for wechat channel. Designed a state-checking harness and RenderVid-based benchmark to evaluate intermediate editing states, temporal consistency, and instruction-following quality. Applied agentic RL to distill large-model planning and editing capabilities into smaller models, improving long-horizon tool-use and editing-policy efficiency.


::: start
#### ByteDance Data
*Fanqie AI*

:::
*Jun. 2025 - Oct.2025*
*Shanghai*

::: end
- Investigated the visual understanding capabilities of Multimodal Large Language Models and developed the pioneering MLLM designed for evaluating the quality of short dramas from the perspective of user preferences.

- Researched Multimodal Large Models (MLLMs) for content moderation (focusing on vulgar/NSFW content) and AI-generated content detection.


::: start
#### Tencent TEG
*AI Platform Department*

:::
*Aug. 2024 - Jun. 2025*
*Shenzhen*

::: end
- Developed a multimodal scene animation framework that integrates visual, textual, and geometric cues to generate camera-motion-compatible backgrounds for human animation, enabling geometrically consistent videos under controllable camera trajectories. Published at ICASSP 2026: *AnimateScene: Camera-controllable Animation in Any Scene*.

- Built a multimodal retrieval and placement system for game assets, leveraging vision-language models and 3D geometric priors to retrieve semantically matched in-game objects from textual/visual queries and place them in spatially plausible scene locations.

::: start
#### Alibaba 
*Digital Commerce-Greater Taobao Alimama & Xian Yu*

:::
*Oct. 2021 - Aug. 2022*
*Beijing*

::: end
- Explores how redundant multimodal queries (text, audio, and visual cues) can intelligently locate key segments in product introduction videos to generate engaging advertisements. By analyzing cross-modal correlations between user search queries (e.g., repetitive keywords, spoken descriptions, or visual close-ups) and video content, our system identifies the most attention-grabbing moments—such as product demos, price reveals, or emotional appeals—to compile into optimized ad videos.

## Research
::: start
#### Breaking Dual Bottlenecks: Evolving Unified Multimodal Models into Self-Adaptive Interleaved Visual Reasoners
*ICML 2026 First Author*
- Proposed and post-trained a unified multimodal model for adaptive X2I reasoning, constructing a 50K+ interleaved dataset across direct generation, reflection, and multi-step planning modes, and applying SFT + GRPO-based RL with step-wise reasoning rewards and complexity penalties to improve visual generation quality and efficiency.

#### Bridging Visual Dynamics and Reasoning Evaluation: Multimodal Large Language Models for Short Drama Quality Assessment
*WWW 2026 First Author*
- We develop the first MLLM for Short Drama Quality Assessment using a two-stage training framework: a Supervised Fine-Tuning (SFT) stage adapts the model to the assessment task, while a Group Relative Policy Optimization (GRPO) stage, using a customized reward function, further aligns its outputs with human preferences.

#### Why Struggle with Continuous Latent Space? Discrete Latent Reasoning via Context Render Compression
*NeurIPS 2026 Under review First Author*
- Developed Discrete Latent Reasoning (DLR) for LLaMA-3 and Qwen3-VL, constructing a discrete latent codebook from rendered CoT data via visual compression and vector quantization, then post-training the model with latent-text alignment, SFT, and GRPO-based RL. Built large-scale reasoning datasets from GSM8K-Aug, MATH, and MathX-5M, improving accuracy and efficiency across multiple math reasoning benchmarks while enabling interpretable latent trajectories.

#### Shadow Generation for Composite Image Using Diffusion Model
*CVPR 2024 First Author*
- We utilize Controlnet to shadow generation task and propose novel intensity module and weighted noise loss to improve performance. Moreover, we extend the small-scale DESOBA dataset to DESOBAv2 using a novel data acquisition pipeline.

#### AnimateScene: Camera-controllable Animation in Any Scene
*ICASSP 2026 First Author*
- We built a pipeline that takes a background image, a character image, a driving video, and a camera trajectory as input, and generates a highly 3D-consistent video of the character moving within the scene with cinematic camera effects.

---

#### TiViBench: Benchmarking Think-in-Video Reasoning for Video Generation
*CVPR 2026 Fourth author*
- We proposed TiViBench, a hierarchical benchmark to evaluate higher-order reasoning in I2V models across structural, spatial, symbolic, and planning dimensions. We also introduced VideoTPO, a training-free test-time strategy that leverages LLM self-analysis to significantly boost the reasoning performance of video generative models.

#### UnicEdit-10M: A Dataset and Benchmark Breaking the Scale-Quality Barrier via Unified Verification for Reasoning-Enriched Edits
*CVPR 2026 Fourth author*
- We introduced UnicEdit-10M, a massive 10M-scale image editing dataset generated via an end-to-end pipeline that replaces traditional multi-toolchains for superior scalability and quality. We further proposed UnicBench to provide fine-grained diagnostic insights into the reasoning limitations of both closed-source and open-source models.

#### Unlocking the Black Box of Latent Reasoning: An Interpretability-Guided Approach to Intervention
*ACL 2026 Fifth author*
- Proposed a training-free intervention framework for LLM latent reasoning, using CKA-based representation analysis, linear probing, causal editing, and geometric priors to interpret and steer hidden-state reasoning trajectories. Applied decode-time latent-state interventions to Qwen3 and LLaMA models, improving performance on mathematical and commonsense reasoning benchmarks without updating model parameters.

#### HyperET: Efficient Training in Hyperbolic Space for Multi-modal Large Language Models
*NeurIPS 2025 Oral Third author*
- We proposed HyperET, an efficient training paradigm that leverages hyperbolic space to align visual and textual representations across arbitrary granularity levels by dynamically adjusting the hyperbolic radius. We implemented flexible parameterization through Möbius multiplication with specialized matrices, achieving consistent performance gains across multiple MLLM benchmarks with less than 1% additional parameters.

#### Shadow Generation Using Diffusion Model with Geometry Prior
*CVPR 2025 Second Author*
- We enhance diffusion-based shadow generation by incorporating geometric priors to improve realism. We first predict a rotated bounding box and matched shadow shapes for the foreground object, then inject this geometric guidance into ControlNet for more plausible shadow synthesis.

#### Divide and Conquer: Exploring Language-centric Tree Reasoning for Video Question-Answering
*ICML 2025 Fourth author*
- We propose a Language-centric Tree Reasoning (LTR) framework to enhance the reasoning ability and interpretability of Multimodal Large Language Models (MLLMs) in VideoQA. LTR decomposes complex questions into simpler sub-questions through a recursive language-centric logical tree, then performs bottom-up reasoning with video evidence to derive traceable answers.

#### D³ToM: **Decider-Guided Dynamic Token Merging for Accelerating Diffusion MLLMs**
*AAAI 2025 Third author*
- We propose a plug-and-play method that uses "decider tokens" to create an importance map and dynamically merges redundant visual tokens at each denoising step without altering model parameters. This approach effectively shortens visual token sequences, accelerating inference speeds while maintaining competitive model performance under equivalent computational budgets.







