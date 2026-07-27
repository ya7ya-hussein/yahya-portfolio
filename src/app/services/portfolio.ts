import { Injectable } from '@angular/core';
import { Article, PersonalInfo, Project, Publication } from '../models/portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  private readonly personalInfo: PersonalInfo = {
    name: 'Yahya Alsabahi',
    title: 'Embodied AI Research Engineer',
    description: 'Training on data is not enough. The real breakthrough is when a robot can reason through a problem it has never seen and find a better way to solve it',
    email: 'ya7ya-hussein@outlook.com',
    linkedin: 'https://www.linkedin.com/in/ya7ya-hussein/',
    github: 'https://github.com/ya7ya-hussein',
    website: 'https://ya7ya-hussein.com',
    location: 'Istanbul, Turkey'
  };

  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'KOVA: End-to-End Deep RL Policy for Mobile Robot Complete Coverage Path Planning',
      description: `Trained a DRL agent in Isaac Lab to cover every reachable cell in cluttered, unknown environments, outperforming traditional CPP algorithms by 3x - 4x in path efficiency, with no maps, no hardcoded paths, and no prior knowledge of the environment.`,
      technologies: ['Deep Reinforcement Learning', 'CPP', 'NVIDIA Isaac Lab', 'PyTorch',  'Python', 'SKRL', 'PPO', 'ROS 2'],
      githubUrl: 'https://github.com/ya7ya-hussein/kova',
      featured: true,
      mediaUrl: 'Kova_RL.mp4'
    },
    {
      id: 2,
      title: 'YHBot: Deep RL Policy for Mobile Robot Navigation and Obstacle Avoidance in Dynamic Environments',
      description: `Achieved 95% navigation success in dynamic environments with unpredictable moving obstacles, by training an end-to-end deep RL pipeline that adapts to both static and dynamic obstacles in real time using raw sensor observations alone, without traditional pathfinding algorithms.`,
      technologies: ['Deep Reinforcement Learning', 'SKRL', 'PPO', 'NVIDIA Isaac Lab', 'PyTorch', 'Python', 'Dynamic Obstacle Avoidance', 'Autonomous Navigation'],
      githubUrl: 'https://github.com/ya7ya-hussein/yhbot_navigation',
      featured: true,
      mediaUrl: 'demo.webm'
    },
    {
      id: 3,
      title: 'RELAY: RL Post-Trained VLA Policy for Humanoid Manipulation Resumption from Arbitrary Mid-Task States',
      description: 'Fine-tuning a vision language action model with RL post-training to finish long-horizon manipulation tasks that someone else already started. Every benchmark starts the robot from a clean scene, which hides how badly policies break on the partial, mid-task states that real deployment actually produces, with no new teleoperation data, no fixed start configuration, and no scripted task plan.',
      technologies: ['Deep Reinforcement Learning', 'VLA' ,'RL Post-Training', 'Humanoid Manipulation', 'Imitation Learning', 'PyTorch', 'Python' ],
      featured: true,
      upcoming: true
    }
  ];

  private readonly articles: Article[] = [
    {
      id: 1,
      title: 'The End-to-End Robot Learning Pipeline: The Technical Breakdown',
      platform: 'LinkedIn',
      platformIcon: 'fab fa-linkedin',
      date: 'Jul 2026',
      publishedOn: '2026-07-08',
      description: 'An 8-part technical series covering 150+ papers across the full robot learning pipeline', 
      imageUrl: 'article-robot-learning-pipeline.png',
      url: 'https://www.linkedin.com/pulse/end-to-end-robot-learning-pipeline-technical-yahya-hussein-nosnf'
    },
    {
      id: 2,
      title: 'The Complete 3D World Building Toolkit for Embodied AI (2026)',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'March 2026',
      publishedOn: '2026-02-22',
      description: 'A comparative survey of 8 tools for building photorealistic, physics-ready simulation environments for robot training',
      imageUrl: 'article-3d-world-toolkit.webp',
      url: 'https://medium.com/@yahya712865444/the-complete-3d-world-building-toolkit-for-embodied-ai-2026-94b37275c3ef'
    }, 
    {
      id: 3,
      title: 'Embodied Reasoning: Why It Is Still an Open Problem',
      platform: 'LinkedIn',
      platformIcon: 'fab fa-linkedin',
      date: 'Aug 2026',
      publishedOn: '2026-08-04',
    }, 
    {
      id: 4,
      title: 'Data Collection: Where Robot Intelligence Begins',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      imageUrl: 'Data_collection.png',
      url: 'https://medium.com/@ya7ya-hussein/data-collection-where-robot-intelligence-begins-c67eb88d15df?sharedUserId=ya7ya-hussein'
    }, 
    {
      id: 5,
      title: 'Generative Models: How Robots Learn to Commit to One Valid Action',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      imageUrl: 'Generative_models .png',
      url: 'https://medium.com/@ya7ya-hussein/generative-models-how-robots-learn-to-commit-to-one-valid-action-837e3a9f7a79?sharedUserId=ya7ya-hussein'
    }, 
    {
      id: 6,
      title: 'Sequence Modeling and Transformers: How Robots Remember What They Just Did',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      imageUrl: 'Sequence_Transformers.png',
      url: 'https://medium.com/@ya7ya-hussein/sequence-modeling-and-transformers-how-robots-remember-what-they-just-did-7811a101a953?sharedUserId=ya7ya-hussein'
    }, 
    {
      id: 7,
      title: 'Vision-Language-Action Models: Giving Robots Internet-Scale World Knowledge',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      imageUrl: 'VLAs.png',
      url: 'https://medium.com/@ya7ya-hussein/vision-language-action-models-giving-robots-internet-scale-world-knowledge-8d017f75495d?sharedUserId=ya7ya-hussein'
    }, 
    {
      id: 8,
      title: 'Generalist Policies: One Brain for Many Robot Bodies',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      url: 'https://medium.com/@ya7ya-hussein/generalist-policies-one-brain-for-many-robot-bodies-5d1d382bafc7?sharedUserId=ya7ya-hussein'
    }, 
    {
      id: 9,
      title: 'Beyond Imitation: Reinforcement Learning and Embodied Reasoning',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      imageUrl: 'DRLs.png',
      url: 'https://medium.com/@ya7ya-hussein/beyond-imitation-reinforcement-learning-and-embodied-reasoning-2d0c55d06eeb?sharedUserId=ya7ya-hussein'
    }, 
    {
      id: 10,
      title: 'World Models: How Robots Learn to Practice in Their Own Imagination',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      imageUrl: 'world_models.png',
      url: 'https://medium.com/@ya7ya-hussein/world-models-how-robots-learn-to-practice-in-their-own-imagination-a24c2c05dd10?sharedUserId=ya7ya-hussein'
    },
    {
      id: 11,
      title: 'Sim-to-Real and Evaluation: Does Any of This Actually Work?',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'Jul 2026',
      publishedOn: '2026-07-07',
      imageUrl: 'Evaluation.png',
      url: 'https://medium.com/@ya7ya-hussein/sim-to-real-and-evaluation-does-any-of-this-actually-work-ea491f60e3ed?sharedUserId=ya7ya-hussein'
    }, 
  ];

  /** Empty until the first paper lands; the section renders a placeholder. */
  private readonly publications: Publication[] = [];

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  getProjects(): Project[] {
    return [...this.projects];
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getArticles(): Article[] {
  return [...this.articles].sort((a, b) =>
    b.publishedOn.localeCompare(a.publishedOn)
  );
}

  getPublications(): Publication[] {
    return [...this.publications];
  }
}