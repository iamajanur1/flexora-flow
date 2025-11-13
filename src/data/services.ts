export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: string;
  price: number;
}

export const services: Service[] = [
  {
    id: "paralysis",
    name: "Paralysis Treatment",
    shortDescription: "Advanced neuro-physiotherapy techniques to improve mobility and muscle function.",
    fullDescription: "Our paralysis rehabilitation combines neuro-muscular re-education, electrical stimulation, and functional movement training. Sessions focus on improving strength, mobility, and coordination through guided physiotherapy and personalized care.",
    benefits: [
      "Restores voluntary movement and balance",
      "Improves muscle tone and coordination",
      "Reduces stiffness and pain",
      "Personalized recovery roadmap",
      "Specialized neuro-physiotherapy protocols"
    ],
    icon: "brain",
    price: 500
  },
  {
    id: "spondylosis",
    name: "Spondylosis Treatment",
    shortDescription: "Relief and strengthening therapy for neck and back spondylosis.",
    fullDescription: "Comprehensive treatment combining manual therapy, therapeutic exercises, and postural correction to manage cervical and lumbar spondylosis. Our approach focuses on pain reduction and preventing disease progression.",
    benefits: [
      "Reduces neck and back pain",
      "Improves spinal mobility",
      "Strengthens supporting muscles",
      "Prevents further degeneration",
      "Enhances posture and alignment"
    ],
    icon: "bone",
    price: 400
  },
  {
    id: "nerve-injury",
    name: "Nerve Injury Rehabilitation",
    shortDescription: "Nerve recovery through guided motion and electrotherapy.",
    fullDescription: "Specialized rehabilitation program for peripheral nerve injuries using neuromuscular electrical stimulation, therapeutic exercises, and functional training to promote nerve regeneration and restore function.",
    benefits: [
      "Promotes nerve regeneration",
      "Prevents muscle atrophy",
      "Improves sensory function",
      "Restores functional movements",
      "Reduces neuropathic pain"
    ],
    icon: "zap",
    price: 450
  },
  {
    id: "hajima-dry-needling",
    name: "Hajima Therapy / Dry Needling",
    shortDescription: "Trigger point and deep tissue relief for chronic muscle pain.",
    fullDescription: "Advanced trigger point therapy using dry needling techniques to release muscle knots, reduce pain, and improve tissue healing. Effective for chronic muscle pain and myofascial dysfunction.",
    benefits: [
      "Releases muscle trigger points",
      "Reduces chronic muscle pain",
      "Improves blood circulation",
      "Accelerates tissue healing",
      "Restores normal muscle function"
    ],
    icon: "target",
    price: 350
  },
  {
    id: "shoulder-pain",
    name: "Shoulder Pain Management",
    shortDescription: "Restores flexibility and posture using advanced physiotherapy.",
    fullDescription: "Comprehensive shoulder rehabilitation addressing rotator cuff injuries, frozen shoulder, and impingement syndromes through manual therapy, strengthening exercises, and mobility training.",
    benefits: [
      "Reduces shoulder pain and stiffness",
      "Improves range of motion",
      "Strengthens rotator cuff muscles",
      "Corrects postural imbalances",
      "Prevents recurrent injuries"
    ],
    icon: "user",
    price: 400
  },
  {
    id: "muscle-weakness",
    name: "Muscle Weakness Recovery",
    shortDescription: "Targeted exercises to rebuild muscle strength.",
    fullDescription: "Progressive resistance training and neuromuscular re-education to address muscle weakness from injury, surgery, or prolonged inactivity. Customized programs to restore strength and functional capacity.",
    benefits: [
      "Rebuilds muscle strength",
      "Improves functional capacity",
      "Enhances neuromuscular control",
      "Prevents muscle atrophy",
      "Increases endurance and stamina"
    ],
    icon: "dumbbell",
    price: 350
  },
  {
    id: "tennis-elbow",
    name: "Tennis Elbow Therapy",
    shortDescription: "Specific exercises to reduce pain and inflammation in the elbow.",
    fullDescription: "Targeted treatment for lateral epicondylitis using eccentric strengthening, manual therapy, and activity modification to reduce pain and restore function.",
    benefits: [
      "Reduces elbow pain and tenderness",
      "Improves grip strength",
      "Restores normal elbow function",
      "Prevents chronic tendinopathy",
      "Enables return to activities"
    ],
    icon: "tennis",
    price: 300
  },
  {
    id: "back-pain",
    name: "Back Pain Relief",
    shortDescription: "Personalized spinal mobilization and posture correction programs.",
    fullDescription: "Evidence-based treatment for acute and chronic back pain combining manual therapy, core strengthening, and ergonomic education. Addresses root causes for long-term relief.",
    benefits: [
      "Reduces acute and chronic back pain",
      "Improves spinal mobility",
      "Strengthens core muscles",
      "Corrects postural dysfunction",
      "Prevents future episodes"
    ],
    icon: "spine",
    price: 400
  },
  {
    id: "golfer-elbow",
    name: "Golfer's Elbow Therapy",
    shortDescription: "Focused strengthening and recovery sessions for the elbow joint.",
    fullDescription: "Comprehensive treatment for medial epicondylitis using eccentric exercises, manual therapy, and progressive loading protocols to heal the affected tendons.",
    benefits: [
      "Reduces medial elbow pain",
      "Improves wrist and forearm strength",
      "Restores normal tendon function",
      "Enables gradual return to activity",
      "Prevents recurrent tendinopathy"
    ],
    icon: "golf",
    price: 300
  },
  {
    id: "post-fracture",
    name: "Post Fracture Rehabilitation",
    shortDescription: "Step-by-step physiotherapy plan to restore strength after fractures.",
    fullDescription: "Structured rehabilitation program following fracture healing, focusing on joint mobility, muscle strengthening, and functional restoration to ensure complete recovery.",
    benefits: [
      "Restores joint mobility",
      "Rebuilds muscle strength",
      "Improves bone healing",
      "Prevents stiffness and complications",
      "Accelerates functional recovery"
    ],
    icon: "bone-break",
    price: 450
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getAllServiceIds = (): string[] => {
  return services.map((service) => service.id);
};
