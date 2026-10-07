export const profile = {
  name: 'Aditi Narang', email: 'aditiinarang5@gmail.com', github: 'https://github.com/aditiinarang',
  linkedin: 'https://www.linkedin.com/in/aditiinarang/', cgpa: '8.67',
};
export const skills = [
  { category: 'Cloud & infrastructure', items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'ECS Fargate', 'ECR', 'CloudFormation', 'Systems Manager'] },
  { category: 'DevOps & automation', items: ['Docker', 'Git', 'GitHub', 'CI/CD', 'Linux', 'Vagrant', 'AWS CLI', 'Boto3'] },
  { category: 'Languages & databases', items: ['Java', 'Python', 'C', 'SQL', 'PL/SQL', 'MongoDB', 'Oracle'] },
  { category: 'AI/ML & web', items: ['Machine Learning', 'NLP', 'Generative AI', 'HTML', 'CSS', 'JavaScript', 'MERN basics', 'VS Code', 'Canva'] },
];
export type Project = { title: string; category: 'Cloud & DevOps' | 'Software' | 'AI/ML'; label: string; description: string; highlights: string[]; tech: string[]; visual: 'architecture' | 'terminal' | 'monitor' | 'code'; repo?: string };
export const projects: Project[] = [
  { title: 'Secure Two-Tier AWS Architecture', category: 'Cloud & DevOps', label: 'INFRASTRUCTURE AS CODE', description: 'Secure, reproducible infrastructure for a containerized application on AWS.', highlights: ['Provisioned networking and access controls with CloudFormation.', 'Containerized Node.js workloads with Docker and ECS Fargate; used Session Manager for secure access.'], tech: ['AWS', 'CloudFormation', 'Docker', 'ECS Fargate'], visual: 'architecture' },
  { title: 'AWS Automation with Python & Boto3', category: 'Cloud & DevOps', label: 'CLOUD AUTOMATION', description: 'Turning repetitive cloud resource management into reusable Python workflows.', highlights: ['Automated EC2, S3 and IAM resource management.', 'Used Boto3 and the AWS CLI for operational tasks.'], tech: ['Python', 'Boto3', 'EC2', 'S3', 'IAM'], visual: 'terminal' },
  { title: 'Self-Healing Infrastructure', category: 'Cloud & DevOps', label: 'RELIABILITY ENGINEERING', description: 'Exploring automated recovery for more resilient AWS infrastructure.', highlights: ['Connected infrastructure monitoring with recovery automation.', 'Focused on detecting unhealthy resources and restoring service.'], tech: ['AWS', 'Monitoring', 'Automation'], visual: 'monitor' },
  { title: 'MonitorX', category: 'Cloud & DevOps', label: 'OBSERVABILITY', description: 'Infrastructure monitoring, alerting and audit logging in one cloud workflow.', highlights: ['Tracked server activity and security events.', 'Used access and error logs to understand traffic patterns.'], tech: ['AWS', 'Linux', 'Nginx', 'Alerting'], visual: 'monitor' },
  { title: 'Passwordless SSH on EC2', category: 'Cloud & DevOps', label: 'LINUX & SECURITY', description: 'Secure communication between two Linux servers without password-based login.', highlights: ['Configured SSH key-based authentication between EC2 servers.', 'Applied Linux access controls and secure networking practices.'], tech: ['Linux', 'SSH', 'EC2'], visual: 'terminal' },
  { title: 'MERN House Renting Application', category: 'Software', label: 'FULL-STACK DEVELOPMENT', description: 'A full-stack application for discovering and managing rental properties.', highlights: ['Built with MongoDB, Express, React and Node.js.', 'Used Docker to containerize the application.'], tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker'], visual: 'code' },
  { title: '60 Days Claude AI Challenge', category: 'AI/ML', label: 'AI-ASSISTED DEVELOPMENT', description: 'Exploring generative AI through practical cloud and DevOps use cases.', highlights: ['Applied Claude to AI-assisted development workflows.', 'Explored generative AI fundamentals through a structured challenge.'], tech: ['Claude', 'Generative AI', 'Cloud', 'DevOps'], visual: 'code' },
];
export const experiences = [
  { period: 'JUN – JUL 2026', role: 'AWS Intern', organization: 'IIPC × AWS · KIET Center of Excellence', detail: 'Built secure AWS architectures, automated infrastructure provisioning with CloudFormation, and managed cloud resources using Python and Boto3.', tag: 'Cloud & DevOps' },
  { period: 'LEADERSHIP', role: 'Secretary, IEEE', organization: 'IEEE Student Chapter · KIET', detail: 'Coordinated chapter activities and technical events. Across campus leadership, managed 10+ events and anchored 5 international conferences.', tag: 'Community' },
  { period: 'LEADERSHIP', role: 'Creative Lead', organization: 'AWS Cloud Club · KIET', detail: 'Contributed to cloud community initiatives, creative communication and student engagement.', tag: 'Cloud community' },
  { period: 'LEADERSHIP', role: 'Class Representative', organization: 'Computer Science & Engineering (AI & ML)', detail: 'Represented classmates and coordinated communication between students and faculty.', tag: 'Student leadership' },
  { period: 'DEC 2025 – JAN 2026', role: 'Solutions Architecture Job Simulation', organization: 'AWS · Forage', detail: 'Completed a simulated architecture engagement, designing and evaluating AWS-based infrastructure solutions.', tag: 'Virtual experience' },
];