import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience, Project, Skill, PersonalInfo } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  private personalInfo: PersonalInfo = {
    name: 'Yahya Hussein',
    title: 'AI Robotics Engineer | Embodied AI',
    description: 'Specializing in deep reinforcement learning and autonomous navigation for robotic systems. Developing embodied AI solutions using PyTorch, NVIDIA Isaac Lab, ROS, and computer vision technologies.',
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
      description: 'Contributed to the development of autonomous robotic systems for agricultural applications using ROS (Robot Operating System) and computer vision technologies. Assisted in integrating depth cameras with object detection models and training custom datasets for agricultural environments. Helped implement real-time safety protocols and autonomous navigation capabilities including waypoint planning and SLAM integration. Participated in deployment and field-testing of robotic systems in real-world environments. Creating comprehensive system monitoring dashboards for vehicle dynamics, sensor data, and operational status. Gained hands-on experience in robotics deployment, camera calibration, spatial transformations, and practical testing in agricultural settings.',
      skills: ['ROS', 'Computer Vision', 'TensorFlow', 'CNNs' , 'Docker', 'C++', 'ONNX', 'Object Detection', 'Gazebo']
    },
    {
      id: 2,
      title: 'Technical Assistant',
      company: 'Asia Pacific University of Technology and Innovation (APU)',
      location: 'Malaysia',
      startDate: 'Nov 2023',
      endDate: 'Jul 2024',
      description: 'Offering technical support through the helpdesk by assisting students and staff with diverse technical issues. Ensuring optimal conditions in APU labs and classrooms by troubleshooting and resolving hardware and software issues on Lab PCs. Installing and maintaining projectors in classrooms to facilitate seamless audio-visual experiences for effective learning environments.',
      skills: ['Technical Support', 'Hardware Troubleshooting', 'Software Support', 'Technical Maintenance', 'Computer Assistance']
    }
  ];

  private skills: Skill[] = [
    {
      name: 'Deep Reinforcement Learning & AI',
      icon: 'fas fa-brain',
      description: 'Expertise in Proximal Policy Optimization (PPO), machine learning algorithms, transfer learning, hyperparameter tuning, and neural networks using PyTorch, Scikit-Learn, and ONNX.'
    },
    {
      name: 'Robotics & Autonomous Systems',
      icon: 'fas fa-robot',
      description: 'Specialized in NVIDIA Isaac Lab/Sim, ROS, autonomous navigation, mobile robot navigation, warehouse automation, and robotic system integration using C++, Docker, Rust, and  Python.'
    },
    {
      name: 'Computer Vision',
      icon: 'fas fa-eye',
      description: 'Proficient in image processing, object detection, visual recognition systems, and sensor fusion for robotic applications in real-world environments.'
    },
    {
      name: 'Full-Stack Development',
      icon: 'fas fa-code',
      description: 'Full-stack development with Angular, NestJS, TypeScript, Prisma, PostgreSQL, Fastify, RxJS, REST APIs, and modern web technologies.'
    }
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'YSU Malaysia Website',
      description: 'Led full-stack development of YSU Malaysia\'s official website, serving the Yemeni Students Union community in Malaysia. Built a RESTful API backend using NestJS, Fastify, Prisma, and PostgreSQL with Sharp for image optimization. Developed the Angular frontend with a complete CMS and admin panel for managing news, events, gallery, branches, and team members.',
      technologies: ['Angular', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Fastify', 'RxJS', 'REST APIs', 'SCSS'],
      liveUrl: 'https://ysumalaysia.org',
      featured: true,
      imageUrl: 'ysu_website.png'
    },
    {
      id: 2,
      title: 'Enhancing Mobile Robot Navigation using Deep Reinforcement Learning in Isaac Lab',
      description: 'Developed an autonomous navigation system for differential-drive warehouse robots using Proximal Policy Optimization (PPO) in NVIDIA Isaac Lab, leveraging massively parallel training across 8,192+ simultaneous environments. Successfully achieved collision-free point-to-point navigation in complex simulated warehouse environments (31m × 54m) with racks, aisles, and dynamic obstacles using PyTorch and SKRL for training.',
      technologies: ['Python', 'PyTorch', 'NVIDIA Isaac Lab', 'Reinforcement Learning', 'PPO', 'Autonomous Systems', 'Robot Navigation', 'SKRL', 'Deep Learning'],
      githubUrl: "https://github.com/ya7ya-hussein/yhbot_navigation",
      featured: true,
      imageUrl: 'demo.gif'
    }, 
    {
      id: 3,
      title: "Loan Default Prediction System",
      description: "XGBoost-based loan default prediction system analyzing 255,347 applications with 16 engineered features including income, credit score, and employment history. Achieved 83.2% accuracy with balanced performance. Deployed via Streamlit for real-time risk assessment and automated loan decisions.",
      technologies: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Machine Learning",
        "Data Science"
      ],
      imageUrl: "loan-default-prediction.png", 
      githubUrl: "https://github.com/ya7ya-hussein/Loan-Default-Prediction-System-Using-XGBoost-Classifier",
      featured: true
    }, 
    {
      id: 4, 
      title: "Bird AI Solution",
      description: "A full-stack AI-powered application for real-time bird detection and species identification in aviation hangars. Features YOLO-based computer vision capable of identifying 200+ bird species, real-time video streaming with bird tracking, and actionable recommendations for hangar safety management.",
      technologies: [
        "React",
        "Flask",
        "YOLO",
        "OpenCV",
        "SQLite",
        "Python",
        "JavaScript",
        "Tailwind CSS"
      ],
      imageUrl: "bird-ai-solution.png", 
      githubUrl: "https://github.com/ya7ya-hussein/Bird-AI-Solution",
      featured: true
    }, 

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

  // Method to easily add new projects
  addProject(project: Omit<Project, 'id'>): void {
    const currentProjects = this.projectsSubject.value;
    const newProject: Project = {
      ...project,
      id: Math.max(0, ...currentProjects.map(p => p.id)) + 1
    };
    this.projectsSubject.next([...currentProjects, newProject]);
  }

  // Method to update projects (for future use)
  updateProjects(projects: Project[]): void {
    this.projectsSubject.next(projects);
  }
}