import { Injectable } from '@angular/core';
import { Article, PersonalInfo, Project, Publication } from '../models/portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  private readonly personalInfo: PersonalInfo = {
    name: 'Yahya Alsabahi',
    title: 'Embodied AI Research Engineer',
    description: 'I work on the problems that still do not have good answers in robot learning. How do you build a policy that works across any embodiment? How do you give a robot the ability to think through a scene it has never seen before committing to a move? How do you let a robot practice inside its own imagination before acting in the real world?',
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
      description: `KOVA is a PPO-based deep reinforcement learning agent trained in NVIDIA Isaac Lab to achieve complete coverage of any room without maps, hardcoded paths, or prior environment knowledge. Built for the iRobot Create 3, the policy reads a 12,369-dimensional observation space combining multi-scale egocentric coverage maps across four zoom levels, 360 degree LiDAR, and a 10-step action history, giving it simultaneous awareness of nearby obstacles and long-range frontiers at every step.

KOVA reduces redundant path overlap by 3 to 4 times compared to traditional CPP algorithms, validated across six real-world environments against Heydari et al. (2021) benchmarks. Traditional approaches revisit between 24.8% and 32.7% of ground they have already covered. KOVA brings that down to 7.9% to 9.9%. At inference time, the policy generalizes to rooms it has never seen, relying entirely on real-time sensor observations with no scripts and no prebuilt maps.`,
      technologies: ['Python', 'PyTorch', 'NVIDIA Isaac Lab', 'PPO', 'Deep Reinforcement Learning', 'SKRL', 'ROS 2', 'Reward Shaping', 'Sim-to-Real'],
      githubUrl: 'https://github.com/ya7ya-hussein/kova',
      featured: true,
      mediaUrl: 'Kova_RL.mp4'
    },
    {
      id: 2,
      title: 'YHBot: Deep RL Policy for Mobile Robot Navigation and Obstacle Avoidance in Dynamic Environments',
      description: `YHBot is a PPO-based deep reinforcement learning policy for autonomous navigation of differential-drive robots in dynamic environments. Trained across 8,192 parallel simulation environments over 8 million steps in NVIDIA Isaac Lab using PyTorch and SKRL, the agent learned to navigate complex warehouse settings (31m x 54m) with racks, aisles, and unpredictable moving obstacles, with no demonstrations, no hardcoded rules, and no prior knowledge of the environment.

The policy achieves 95% navigation success while avoiding both static and dynamic obstacles, adapting in real time using only raw sensor observations at each step. There are no traditional pathfinding algorithms in the loop. No A*, no Dijkstra, no prebuilt maps. Every navigation decision flows end-to-end from sensor input to motor command through the trained policy alone.`,
      technologies: ['Python', 'PyTorch', 'NVIDIA Isaac Lab', 'PPO', 'Deep Reinforcement Learning', 'SKRL', 'Dynamic Obstacle Avoidance', 'Autonomous Navigation'],
      githubUrl: 'https://github.com/ya7ya-hussein/yhbot_navigation',
      featured: true,
      mediaUrl: 'demo.webm'
    },
    {
      id: 3,
      title: 'Autonomous UAV Aircraft Surface Inspection',
      description: 'PPO-based deep RL policy for complete autonomous surface inspection of a Boeing 737-800 in a GPS-denied indoor hangar. Built in NVIDIA Isaac Sim and Isaac Lab with a CNN encoder. Targets above 90% surface coverage and above 95% defect detection rate, with a goal of reducing inspection time by more than 70% compared to manual processes.',
      technologies: ['NVIDIA Isaac Sim', 'NVIDIA Isaac Lab', 'PPO', 'CNN', 'Deep Reinforcement Learning', 'UAV', 'Python', 'PyTorch'],
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
      date: 'July 2026',
      description: 'An 8-part technical series covering 150+ papers across the full robot learning pipeline.'
    },
    {
      id: 2,
      title: 'The Complete 3D World Building Toolkit for Embodied AI (2026)',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'March 2026',
      description: 'A comparative survey of 8 tools for building photorealistic, physics-ready simulation environments for robot training, covering World Labs Marble, SceneSmith, Infinigen, SAGE-10k, and more.',
      url: 'https://medium.com/@yahya712865444/the-complete-3d-world-building-toolkit-for-embodied-ai-2026-94b37275c3ef'
    }
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
    return [...this.articles];
  }

  getPublications(): Publication[] {
    return [...this.publications];
  }
}