export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  industry: Industry;
  solution: Solution;
  image: string;
  logo: string;
  metrics: Metric[];
  content: string;
  company: {
    name: string;
    size: string;
    location: string;
  };
}

export type Industry = (typeof industries)[number];
export type Solution = (typeof solutions)[number];

export const industries = [
  'Financial Services',
  'Healthcare',
  'Technology',
  'Manufacturing',
  'Retail',
  'Professional Services',
  'Education',
  'Government',
] as const;

export const solutions = [
  'Data Retrieval',
  'Employee Support',
  'Business Intelligence',
  'Process Automation',
  'Knowledge Management',
  'Customer Service',
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'global-bank-knowledge-management',
    title: 'How a Global Bank Transformed Their Knowledge Management',
    description:
      'Leading financial institution implements Centrus AI to streamline operations and improve employee productivity across 50,000+ staff members.',
    industry: 'Financial Services',
    solution: 'Knowledge Management',
    image: '/case-studies/financial-services-hero.jpg',
    logo: '/case-studies/logos/global-bank.svg',
    metrics: [
      { label: 'Reduction in search time', value: '85%' },
      { label: 'Productivity gain', value: '32%' },
      { label: 'ROI achieved', value: '411%' },
      { label: 'User satisfaction', value: '96%' },
    ],
    company: {
      name: 'Global Financial Corporation',
      size: '50,000+ employees',
      location: 'Global',
    },
    content: `[Previous content remains the same...]`,
  },
  {
    slug: 'healthcare-provider-employee-support',
    title: 'AI-Powered Support System Transforms Healthcare Operations',
    description:
      'Major healthcare provider implements 24/7 AI assistance to support medical staff and improve patient care delivery.',
    industry: 'Healthcare',
    solution: 'Employee Support',
    image: '/case-studies/healthcare-hero.jpg',
    logo: '/case-studies/logos/healthcare-provider.svg',
    metrics: [
      { label: 'Time saved per day', value: '2.5 hrs' },
      { label: 'Response accuracy', value: '99.2%' },
      { label: 'Staff satisfaction', value: '94%' },
      { label: 'Cost reduction', value: '45%' },
    ],
    company: {
      name: 'Metropolitan Healthcare',
      size: '15,000+ employees',
      location: 'United States',
    },
    content: `# Healthcare Provider Revolutionizes Employee Support

## Challenge

Metropolitan Healthcare faced critical challenges in supporting their medical staff:

- Rising operational costs and administrative burden
- Complex, time-consuming information retrieval processes
- High pressure on support staff during peak hours
- Inconsistent response times affecting patient care
- Growing documentation requirements

## Solution

Implemented Centrus AI's comprehensive employee support system:

1. 24/7 Virtual Assistant
   - Instant response to staff queries
   - Clinical information access
   - Protocol guidance
   - Administrative support

2. Smart Workflow Management
   - Automated task prioritization
   - Resource allocation
   - Schedule optimization
   - Documentation assistance

3. Knowledge Integration
   - Clinical guidelines integration
   - Real-time policy updates
   - Best practices sharing
   - Training materials access

## Results

### Immediate Benefits
- 2.5 hours saved per staff member daily
- 99.2% accuracy in information delivery
- 94% staff satisfaction rate
- 45% reduction in support costs

### Operational Improvements
- Reduced administrative burden
- Enhanced patient care quality
- Improved compliance adherence
- Accelerated onboarding process

## Implementation Approach

### Phase 1: Assessment & Planning
- Workflow analysis
- System requirements gathering
- Integration planning
- Staff consultation

### Phase 2: Implementation
- Staged rollout by department
- Training programs
- Feedback collection
- Performance monitoring

### Phase 3: Optimization
- System refinement
- Advanced feature activation
- Cross-department expansion
- Analytics implementation

## Key Features Utilized

1. Clinical Knowledge Base
2. Protocol Navigator
3. Resource Scheduler
4. Documentation Assistant
5. Performance Analytics

## Future Developments

- AI-powered diagnostic support
- Predictive resource allocation
- Enhanced mobile capabilities
- Expanded specialization coverage`,
  },
  {
    slug: 'tech-company-process-automation',
    title: 'Leading Tech Company Automates Core Business Processes',
    description:
      'Global technology firm leverages Centrus AI to automate complex workflows and enhance operational efficiency.',
    industry: 'Technology',
    solution: 'Process Automation',
    image: '/case-studies/technology-hero.jpg',
    logo: '/case-studies/logos/tech-company.svg',
    metrics: [
      { label: 'Process efficiency', value: '+75%' },
      { label: 'Cost savings', value: '$2.5M' },
      { label: 'Error reduction', value: '92%' },
      { label: 'Time saved', value: '5000 hrs' },
    ],
    company: {
      name: 'TechCorp Solutions',
      size: '25,000+ employees',
      location: 'Global',
    },
    content: `# TechCorp Transforms Operations with AI

## Challenge

TechCorp Solutions encountered significant operational inefficiencies:

- Manual handling of complex workflows
- High error rates in routine processes
- Significant resource allocation inefficiencies
- Delayed response times to market changes
- Scalability limitations

## Solution

Implemented comprehensive process automation using Centrus AI:

1. Intelligent Workflow Automation
   - End-to-end process mapping
   - Smart routing and prioritization
   - Real-time monitoring
   - Adaptive optimization

2. Decision Support System
   - Data-driven insights
   - Predictive analytics
   - Risk assessment
   - Resource optimization

3. Integration Framework
   - Legacy system connection
   - API management
   - Cross-platform synchronization
   - Real-time data flow

## Results

### Quantitative Impact
- 75% increase in process efficiency
- $2.5M annual cost savings
- 92% reduction in errors
- 5000 hours saved monthly

### Qualitative Benefits
- Enhanced operational agility
- Improved customer satisfaction
- Better resource utilization
- Increased market responsiveness

## Implementation Strategy

### Phase 1: Discovery
- Process analysis
- Opportunity identification
- ROI assessment
- Stakeholder alignment

### Phase 2: Development
- Custom solution design
- Integration development
- Testing and validation
- User training

### Phase 3: Deployment
- Phased rollout
- Performance monitoring
- Feedback integration
- Continuous improvement

## Core Features Deployed

1. Process Orchestrator
2. Analytics Dashboard
3. Integration Hub
4. Performance Monitor
5. Automation Builder

## Future Roadmap

- Advanced AI capabilities
- Extended automation scope
- Predictive maintenance
- Enhanced reporting tools`,
  },
  {
    slug: 'manufacturing-business-intelligence',
    title: 'Manufacturing Giant Enhances Decision Making with AI',
    description:
      'International manufacturer implements advanced analytics and AI-driven insights to optimize operations.',
    industry: 'Manufacturing',
    solution: 'Business Intelligence',
    image: '/case-studies/manufacturing-hero.jpg',
    logo: '/case-studies/logos/manufacturer.svg',
    metrics: [
      { label: 'Efficiency gain', value: '43%' },
      { label: 'Downtime reduction', value: '67%' },
      { label: 'Cost savings', value: '$4.2M' },
      { label: 'ROI achieved', value: '285%' },
    ],
    company: {
      name: 'Global Manufacturing Inc',
      size: '30,000+ employees',
      location: 'Global',
    },
    content: `# Manufacturing Excellence Through AI

## Challenge

Global Manufacturing Inc faced critical operational challenges:

- Limited visibility into production metrics
- Reactive maintenance approaches
- Inefficient resource allocation
- Quality control inconsistencies
- Supply chain disruptions

## Solution

Implemented Centrus AI's business intelligence platform:

1. Real-time Analytics
   - Production monitoring
   - Quality metrics tracking
   - Resource utilization analysis
   - Performance dashboards

2. Predictive Maintenance
   - Equipment health monitoring
   - Failure prediction
   - Maintenance scheduling
   - Cost optimization

3. Supply Chain Optimization
   - Demand forecasting
   - Inventory management
   - Supplier analytics
   - Risk assessment

## Results

### Performance Improvements
- 43% overall efficiency increase
- 67% reduction in downtime
- $4.2M annual cost savings
- 285% ROI within 18 months

### Operational Benefits
- Enhanced production quality
- Optimized resource allocation
- Improved supply chain reliability
- Reduced maintenance costs

## Implementation Process

### Phase 1: Foundation
- Infrastructure setup
- Data integration
- Baseline analysis
- Team training

### Phase 2: Deployment
- System implementation
- Process integration
- Performance monitoring
- User adoption

### Phase 3: Optimization
- Advanced analytics
- AI model refinement
- Automation expansion
- Continuous improvement

## Key Features Utilized

1. Production Analytics
2. Maintenance Predictor
3. Resource Optimizer
4. Quality Monitor
5. Supply Chain Manager

## Future Initiatives

- IoT integration expansion
- Advanced AI modeling
- Digital twin development
- Sustainable operations analytics`,
  },
];
