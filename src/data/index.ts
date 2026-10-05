import { PersonalInfo, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Saliha Karaman",
  profileImage: "",
  title: {
    tr: "Matematik Öğretmeni & Bilgisayar Bilimleri Öğrencisi",
    en: "Mathematics Teacher & Computer Science Student",
  },
  email: "salihakaraman33@gmail.com",
  location: {
    tr: "Adana, Türkiye",
    en: "Adana, Turkey",
  },
  bio: {
    tr: "Matematik eğitimi, eğitim teknolojileri ve bilgisayar bilimlerini birleştiriyorum. Öğrenci aidiyeti, erişilebilirlik ve analitik düşünmeyi merkeze alan çözümler üretmeye odaklanıyorum.",
    en: "I combine mathematics education, educational technology, and computer science. I focus on solutions centered on student belonging, accessibility, and analytical thinking.",
  },
  socialLinks: {
    github: "https://github.com/salihakaraman",
    linkedin: "https://linkedin.com/in/salihakaraman",
    website: "https://saliha.me"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Okul Aidiyeti, Yaşam Kalitesi ve Okul Terk Riski",
    description: {
      tr: "Taşımalı eğitim gören lise öğrencilerinin okul aidiyeti, yaşam kalitesi algısı ve okul terk riski üzerine kapsamlı araştırma ve istatistiksel değerlendirme.",
      en: "Comprehensive research and statistical evaluation on school belonging, quality-of-life perception, and dropout risk among high school students in transported education.",
    },
    technologies: ["SPSS", "Veri Analizi", "Akademik Araştırma"],
    featured: true
  },
  {
    id: "2",
    title: "Mobil Uygulama Geliştirme Atölyesi",
    description: {
      tr: "Flutter, Dart ve Firebase kullanarak 60 saatlik atölye kapsamında geliştirilen mobil uygulama deneyimi ve uygulama mimarisi çalışmaları.",
      en: "Mobile application experience and architecture work developed during a 60-hour workshop using Flutter, Dart, and Firebase.",
    },
    technologies: ["Flutter", "Firebase", "Dart"],
    featured: true
  },
  {
    id: "3",
    title: "Dijital Eğitim ve Yapay Zeka Okuryazarlığı",
    description: {
      tr: "Yapay zeka araçlarının eğitimde kullanımı, etik duyarlılık ve teknoloji okuryazarlığı üzerine farkındalık ve gelişim programları.",
      en: "Awareness and development programs on AI tools in education, ethical awareness, and technology literacy.",
    },
    technologies: ["AI", "Eğitim Teknolojileri", "Dijital Okuryazarlık"],
    featured: false
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
    startDate: "2020-10",
    endDate: "2021-01",
    description: {
      tr: "Görme engelli öğrenciler için matematik ders içeriklerinin uyarlanması ve bireysel destek sağlanması.",
      en: "Adapted mathematics learning content for visually impaired students and provided individualized educational support.",
    },
    technologies: ["Eğitim Teknolojileri", "Erişilebilirlik"],
    location: "Kurtuluş, Ankara"
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
      tr: "Yapay zeka çağında liderlik, profesyonel iletişim ve kariyer farkındalığı üzerine eğitimlere katılım.",
      en: "Participation in training on leadership in the AI era, professional communication, and career awareness.",
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