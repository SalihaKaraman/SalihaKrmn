import { PersonalInfo, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Saliha Karaman",
  profileImage: "/profile.jpeg", // Kendi fotoğraf yolunu buraya ekleyebilirsin
  title: {
    tr: "Matematik Öğretmeni & Bilgisayar Bilimleri Öğrencisi",
    en: "Mathematics Teacher & Computer Science Student",
  },
  email: "salihakaraman33@gmail.com", // Kendi e-posta adresinle güncelleyebilirsin
  location: {
    tr: "Adana, Türkiye",
    en: "Adana, Türkiye",
  },
  bio: {
    tr: "Matematik öğretimi ve eğitim teknolojilerini birleştiriyorum. Konunun mantığını kavratan adım adım çözümler üretmeye ve EdTech alanında yazılım çözümleri geliştirmeye odaklıyım.",
    en: "Merging mathematics education with EdTech. Focused on creating step-by-step solutions that teach the underlying logic and developing software for the educational sector.",
  },
  socialLinks: {
    github: "https://github.com/salihakaraman", // Profil linklerini güncelleyebilirsin
    linkedin: "https://linkedin.com/in/salihakaraman",
    website: "https://salihakaraman.dev"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Yükseköğretim ve Taşımalı Eğitim Analizi",
    description: {
      tr: "Taşımalı eğitim gören lise öğrencilerinin okul aidiyeti, yaşam kalitesi algısı ve okul terk riski üzerine kapsamlı akademik araştırma ve istatistiksel analiz.",
      en: "Comprehensive academic research and statistical analysis on school belonging, quality of life perception, and dropout risks among high school students in transported education.",
    },
    technologies: ["SPSS", "Veri Analizi", "Akademik Araştırma"],
    featured: true
  },
  {
    id: "2",
    title: "Mobile App Development Workshop",
    description: {
      tr: "Flutter ve Firebase kullanarak 60 saatlik yoğun bir eğitim kapsamında geliştirilen mobil uygulama projeleri.",
      en: "Mobile application projects developed during an intensive 60-hour workshop using Flutter and Firebase.",
    },
    technologies: ["Flutter", "Firebase", "Dart"],
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Altı Nokta Körler Derneği",
    position: {
      tr: "Gönüllü Matematik Öğretmeni",
      en: "Volunteer Mathematics Teacher",
    },
    startDate: "2023-01",
    description: {
      tr: "Görme engelli öğrenciler için matematik ders içeriklerinin uyarlanması ve gönüllü eğitmenlik desteği.",
      en: "Adapted mathematics curriculum for visually impaired students and provided volunteer teaching support.",
    },
    technologies: ["Eğitim Teknolojileri", "Erişilebilirlik"],
    location: "Ankara, Türkiye"
  },
  {
    id: "2",
    company: "Wtech & Ford Otosan",
    position: {
      tr: "Yapay Zeka ve Kariyer Farkındalığı Katılımcısı",
      en: "AI and Career Awareness Participant",
    },
    startDate: "2025-09",
    description: {
      tr: "Yapay zeka çağında liderlik ve gelişen dünyada kariyer farkındalığı üzerine profesyonel gelişim programları.",
      en: "Professional development programs on leadership in the AI age and career awareness in a developing world.",
    },
    technologies: ["AI", "Liderlik", "Kariyer Planlama"],
    location: "Online"
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Çukurova Üniversitesi",
    degree: {
      tr: "Yüksek Lisans",
      en: "Master's Degree",
    },
    field: "Eğitim Programları ve Öğretim",
    startDate: "2025-09",
    endDate: "Devam Ediyor",
    description: {
      tr: "Eğitimde program geliştirme ve taşımalı eğitim üzerine tez çalışması.",
      en: "Curriculum development and thesis work on transported education.",
    }
  },
  {
    id: "2",
    institution: "Çukurova Üniversitesi",
    degree: {
      tr: "Lisans",
      en: "Bachelor's Degree",
    },
    field: "Bilgisayar Bilimleri (Computer Science)",
    startDate: "2024-09",
    endDate: "2028-06",
    description: {
      tr: "Siber güvenlik, ağ yönetimi, mobil uygulama geliştirme ve gömülü sistemler üzerine teknik eğitim.",
      en: "Technical education in cybersecurity, network administration, mobile app development, and embedded systems.",
    }
  },
  {
    id: "3",
    institution: "Orta Doğu Teknik Üniversitesi (ODTÜ)",
    degree: {
      tr: "Lisans",
      en: "Bachelor's Degree",
    },
    field: "İlköğretim Matematik Öğretmenliği",
    startDate: "2018-09",
    endDate: "2023-06",
    description: {
      tr: "Üst düzey matematik pedagojisi ve eğitim bilimleri eğitimi.",
      en: "Advanced mathematics pedagogy and educational sciences training.",
    }
  }
];