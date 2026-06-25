import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience, Project, Skill, PersonalInfo, Article, Publication } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private personalInfo: PersonalInfo = {
    name: 'Yahya Hussein',
    title: 'Embodied AI Research Engineer',
    description: 'I build robots that perceive, decide, and act, bridging the gap between simulation and the physical world through deep reinforcement learning and Vision Language Action models.',
    email: 'ya7ya-hussein@outlook.com',
    linkedin: 'https://www.linkedin.com/in/ya7ya-hussein/',
    github: 'https://github.com/ya7ya-hussein',
    location: 'Malaysia'
  };

  private experiences: Experience[] = [
    {
      id: 1,
      title: 'AI Robotics Engineer Intern',
      company: 'Meraque',
      location: 'Malaysia',
      startDate: 'Jan 2025',
      endDate: 'May 2025',
      description: 'Collaborated in the engineering and deployment of three autonomous robots, including an airport baggage handler and two agricultural sprayers, across a 50-hectare footprint. Navigating dynamic outdoor environments like palm tree farms required integrating ROS 2, computer vision, SLAM, and sensor fusion, which ultimately resulted in a 92% navigation accuracy during real-world testing. This high level of reliability was achieved by designing sophisticated waypoint and path planning algorithms, paired with advanced collision avoidance systems powered by depth cameras and LiDAR.',
      skills: ['ROS 2', 'SLAM', 'Sensor Fusion', 'Computer Vision', 'Autonomous Navigation', 'LiDAR', 'Python', 'C++', 'Docker']
    },
    {
      id: 2,
      title: 'Technical Assistant',
      company: 'Asia Pacific University of Technology and Innovation (APU)',
      location: 'Malaysia',
      startDate: 'Nov 2023',
      endDate: 'Jul 2024',
      description: 'Offering technical support through the helpdesk by assisting students and staff with diverse technical issues. Ensuring optimal conditions in APU labs and classrooms by troubleshooting and resolving hardware and software issues on Lab PCs. Installing and maintaining projectors in classrooms to facilitate seamless audio-visual experiences for effective learning environments.',
      skills: ['Technical Support', 'Hardware Troubleshooting', 'Software Support']
    }
  ];
private skills: Skill[] = [
  {
    name: 'Deep Reinforcement Learning',
    icon: 'fas fa-brain',
    description: 'The core engine behind everything. Training agents that learn purely through trial, error, and millions of simulated interactions with no shortcuts. The toolkit spans PPO, SAC, DDPG, policy gradient methods, reward shaping, and curriculum learning. The measure of success is never a loss curve. It is a policy that controls a robot reliably, in environments it has never seen.'
  },
  {
    name: 'Robot Policy Learning',
    icon: 'fas fa-robot',
    description: 'Beyond pure RL, there are richer ways to teach a robot. Imitation learning and behavior cloning let policies start from human demonstrations. Diffusion policies and flow matching handle the full distribution of possible actions, not just the average one. VLA architectures bring language grounding and internet-scale knowledge into the loop, moving toward policies that generalize across tasks, objects, and embodiments without being retrained from scratch each time.'
  },
  {
    name: 'Sim-to-Real Transfer',
    icon: 'fas fa-microchip',
    description: 'A policy that only works in simulation is not a policy. Building end-to-end training environments in Isaac Lab, Isaac Sim, and MuJoCo, then applying domain randomization, contact dynamics modeling, and calibration techniques that close the gap between clean simulation and the unpredictable physical world. The finish line is always hardware deployment, not a benchmark score.'
  },
  {
    name: 'Computer Vision and Perception',
    icon: 'fas fa-eye',
    description: 'A robot only knows what its sensors tell it. Designing observation spaces that give policies the right information to act: LiDAR for spatial awareness, depth cameras for proximity, RGB for visual context, and egocentric maps for spatial reasoning. Not perception for its own sake, but perception as a structured input to a policy that must decide, at every step, what to do next.'
  }
];

  private projects: Project[] = [
  {
    id: 1,
    title: 'KOVA: End-to-End Deep RL Policy for Mobile Robot Complete Coverage Path Planning',
    description: `KOVA is a PPO-based deep reinforcement learning agent trained in NVIDIA Isaac Lab to achieve complete coverage of any room without maps, hardcoded paths, or prior environment knowledge. Built for the iRobot Create 3, the policy reads a 12,369-dimensional observation space combining multi-scale egocentric coverage maps across four zoom levels, 360 degree LiDAR, and a 10-step action history, giving it simultaneous awareness of nearby obstacles and long-range frontiers at every step.

KOVA reduces redundant path overlap by 3 to 4 times compared to traditional CPP algorithms, validated across six real-world environments against Heydari et al. (2021) benchmarks. Traditional approaches revisit between 24.8% and 32.7% of ground they have already covered. KOVA brings that down to 7.9% to 9.9%. At inference time, the policy generalizes to rooms it has never seen, relying entirely on real-time sensor observations with no scripts and no prebuilt maps.`,
    technologies: ['Python', 'PyTorch', 'NVIDIA Isaac Lab', 'PPO', 'Deep Reinforcement Learning', 'SKRL', 'ROS 2', 'Reward Shaping', 'Sim-to-Real'],
    githubUrl: 'https://github.com/ya7ya-hussein/kova',
    featured: true,
    imageUrl: 'Kova_RL.mp4',
  },
  {
    id: 2,
    title: 'YHBot: Deep RL Policy for Mobile Robot Navigation and Obstacle Avoidance in Dynamic Environments',
    description: `YHBot is a PPO-based deep reinforcement learning policy for autonomous navigation of differential-drive robots in dynamic environments. Trained across 8,192 parallel simulation environments over 8 million steps in NVIDIA Isaac Lab using PyTorch and SKRL, the agent learned to navigate complex warehouse settings (31m x 54m) with racks, aisles, and unpredictable moving obstacles, with no demonstrations, no hardcoded rules, and no prior knowledge of the environment.

The policy achieves 95% navigation success while avoiding both static and dynamic obstacles, adapting in real time using only raw sensor observations at each step. There are no traditional pathfinding algorithms in the loop. No A*, no Dijkstra, no prebuilt maps. Every navigation decision flows end-to-end from sensor input to motor command through the trained policy alone.`,
    technologies: ['Python', 'PyTorch', 'NVIDIA Isaac Lab', 'PPO', 'Deep Reinforcement Learning', 'SKRL', 'Dynamic Obstacle Avoidance', 'Autonomous Navigation'],
    githubUrl: 'https://github.com/ya7ya-hussein/yhbot_navigation',
    featured: true,
    imageUrl: 'demo.webm'
  }
];

  private articles: Article[] = [
    {
      id: 1,
      title: 'A Complete Roadmap to Robot Learning: From Robot Control to the Embodied AI Frontier',
      platform: 'LinkedIn',
      platformIcon: 'fab fa-linkedin',
      date: 'June 2026',
      description: 'A structured learning roadmap for two audiences: AI engineers entering robotics, and robotics engineers entering robot learning. Traces the full path from robot control fundamentals through policy training, covering PPO, imitation learning, and diffusion policies, all the way to frontier embodied AI systems including VLAs, world models, and generalist robot policies.',
      url: '',
      published: false
    },
    {
      id: 2,
      title: 'The Complete 3D World Building Toolkit for Embodied AI (2026)',
      platform: 'Medium',
      platformIcon: 'fab fa-medium',
      date: 'March 2026',
      description: 'A comparative survey of 8 tools for building photorealistic, physics-ready simulation environments for robot training, covering World Labs Marble, SceneSmith, Infinigen, SAGE-10k, and more. Reviews cost, VRAM requirements, output formats, Isaac Sim compatibility, and real-world gotchas from hands-on testing of each tool.',
      url: 'https://medium.com/@yahya712865444/the-complete-3d-world-building-toolkit-for-embodied-ai-2026-94b37275c3ef',
      published: true
    }
  ];

  private publications: Publication[] = [
    {
      id: 1,
      title: 'Coming Soon',
      comingSoon: true
    }
  ];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);

  constructor() {}

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getProjects(): Observable<Project[]> {
    return this.projectsSubject.asObservable();
  }

  getArticles(): Article[] {
    return this.articles;
  }

  getPublications(): Publication[] {
    return this.publications;
  }

  addProject(project: Omit<Project, 'id'>): void {
    const currentProjects = this.projectsSubject.value;
    const newProject: Project = {
      ...project,
      id: Math.max(0, ...currentProjects.map(p => p.id)) + 1
    };
    this.projectsSubject.next([...currentProjects, newProject]);
  }

  updateProjects(projects: Project[]): void {
    this.projectsSubject.next(projects);
  }
}
