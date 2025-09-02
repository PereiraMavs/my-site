import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType } from 'docx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertMarkdownToWord() {
  try {
    // Read the markdown file
    const markdownPath = path.join(__dirname, 'Shovon_Niverd_Pereira_CV.md');
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    
    // Create a new document
    const doc = new Document({
      styles: {
        default: {
          heading1: {
            run: {
              size: 32,
              bold: true,
              color: "1a202c",
            },
            paragraph: {
              spacing: {
                after: 240,
                before: 240,
              },
            },
          },
          heading2: {
            run: {
              size: 24,
              bold: true,
              color: "2d3748",
            },
            paragraph: {
              spacing: {
                after: 120,
                before: 240,
              },
            },
          },
          heading3: {
            run: {
              size: 20,
              bold: true,
              color: "4a5568",
            },
            paragraph: {
              spacing: {
                after: 80,
                before: 120,
              },
            },
          },
        },
      },
      sections: [{
        properties: {},
        children: [
          // Header - Name
          new Paragraph({
            children: [
              new TextRun({
                text: "Shovon Niverd Pereira",
                bold: true,
                size: 32,
                color: "1a202c",
              }),
            ],
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
          
          // Contact Information
          new Paragraph({
            children: [
              new TextRun({
                text: "📧 niverdpereira@gmail.com | 📱 +1(817)287-8950",
                size: 20,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "🔗 LinkedIn: shovon-pereira | 🐙 GitHub: PereiraMavs | 📍 Arlington, Texas",
                size: 20,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 },
          }),

          // Professional Summary
          new Paragraph({
            children: [
              new TextRun({
                text: "Professional Summary",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "I'm a PhD candidate in Computer Science at UT Arlington with over 2 years of industry experience as a Senior Software Engineer at Samsung R&D Institute. My research focuses on explainable AI and surrogate models for machine learning, while I actively contribute to academia as a Graduate Teaching Assistant across multiple courses from Object-Oriented Software Engineering to Machine Learning.",
                size: 20,
              }),
            ],
            spacing: { after: 240 },
          }),

          // Education
          new Paragraph({
            children: [
              new TextRun({
                text: "Education",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Ph.D. in Computer Science and Engineering",
                bold: true,
                size: 20,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "The University of Texas at Arlington | 2022 - Ongoing",
                italic: true,
                size: 20,
              }),
            ],
            spacing: { after: 80 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Software Engineering Research Center • GPA: 3.7/4.0",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Courses Completed: Data Structures & Algorithms, Distributed Systems, Data Analysis & Modelling, Machine Learning, Compilers, Advanced Software Engineering, Computational Models & Algorithms",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• PhD Progress: Diagnostic Evaluation ✓, Comprehensive Exam ✓, Coursework ✓, Dissertation Proposal (In Progress)",
                size: 20,
              }),
            ],
            spacing: { after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Bachelor of Science in Computer Science and Engineering",
                bold: true,
                size: 20,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Military Institute of Science and Technology | 2016 - 2019",
                italic: true,
                size: 20,
              }),
            ],
            spacing: { after: 80 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• GPA: 3.37/4.0",
                size: 20,
              }),
            ],
            spacing: { after: 240 },
          }),

          // Professional Experience
          new Paragraph({
            children: [
              new TextRun({
                text: "Professional Experience",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Sr. Software Engineer",
                bold: true,
                size: 20,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Samsung Research and Development Institute | Feb 2020 - July 2022",
                italic: true,
                size: 20,
              }),
            ],
            spacing: { after: 80 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Developed Samsung Account application as a part of Android Application team",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Led the development of terms & condition, remote sign in, profile status module",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Worked on several other modules such as sign out, API and app architecture",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Worked as part of a research team to minimize resource usage of Samsung Account in low-end devices",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Samsung Account is being used globally as the principal account and eco-system manager for Samsung devices",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Technologies: Android, Kotlin",
                bold: true,
                size: 20,
              }),
            ],
            spacing: { after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Graduate Research Assistant",
                bold: true,
                size: 20,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Dean's Office, The University of Texas at Arlington | Summer 2024",
                italic: true,
                size: 20,
              }),
            ],
            spacing: { after: 80 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Conducted research projects under the Dean's office supervision",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Assisted with academic administrative tasks and initiatives",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Collaborated on institutional research and development projects",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Supported various academic programs and strategic planning activities",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Focus Areas: Research, Academic Administration",
                bold: true,
                size: 20,
              }),
            ],
            spacing: { after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Graduate Teaching Assistant",
                bold: true,
                size: 20,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Department of Computer Science and Engineering, The University of Texas at Arlington | September 2022 - Ongoing",
                italic: true,
                size: 20,
              }),
            ],
            spacing: { after: 80 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Prepare course material and exams for bachelor and masters level students",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Grade quizzes and final exams",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Deliver lectures on behalf of course instructor when required",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Guide and evaluate students on various projects",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Courses: Object-oriented Software Engineering, Distributed Systems, Machine Learning, Assembly Language",
                bold: true,
                size: 20,
              }),
            ],
            spacing: { after: 240 },
          }),

          // Research Experience
          new Paragraph({
            children: [
              new TextRun({
                text: "Research Experience",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Constructing Good Surrogate Model for Machine Learning",
                bold: true,
                size: 20,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "UT Arlington | 2022 - Present",
                italic: true,
                size: 20,
              }),
            ],
            spacing: { after: 80 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Understanding and interpreting the decision-making process of black-box machine learning models is often challenging, making their predictions less transparent. As ML models are increasingly adopted in sensitive domains like healthcare and finance, ensuring trustworthy and accountable decision-making is critical. This project aims to use surrogate models—simpler, interpretable models that approximate the behavior of complex black-box systems—to improve transparency. These models are easy to analyze and can also be valuable tools in studying adversarial attacks. We are exploring innovative techniques to construct effective surrogate models for black-box ML systems.",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Research Areas: Machine Learning, Explainable AI, Surrogate Models, Adversarial Attacks",
                bold: true,
                size: 20,
              }),
            ],
            spacing: { after: 240 },
          }),

          // Publications
          new Paragraph({
            children: [
              new TextRun({
                text: "Publications",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Blockchain-based digital record-keeping in land administration system",
                bold: true,
                size: 18,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "S Niverd Pereira, N Tasnim, R Sunny Rizon, M Nazrul Islam",
                size: 16,
              }),
            ],
            spacing: { after: 20 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Proceedings of International Joint Conference on Advances in Computational Intelligence: IJCACI, 2021",
                italic: true,
                size: 16,
              }),
            ],
            spacing: { after: 20 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Link: ",
                size: 16,
              }),
              new TextRun({
                text: "https://link.springer.com/chapter/10.1007/978-981-16-0586-4_35",
                size: 16,
                color: "0066cc",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "0066cc",
                },
              }),
            ],
            spacing: { after: 80 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Multi-channel Approach Towards Digitizing the Land Management System of Bangladesh",
                bold: true,
                size: 18,
                color: "2d3748",
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Shovon Niverd Pereira, Noshin Tasnim, M Shahir Rahman, Sanjida Nasreen Tumpa, Md Mahboob Karim, Rabius Sunny Rizon, Nabila Shahnaz Khan, Ruhul Ambia Remon",
                size: 16,
              }),
            ],
            spacing: { after: 20 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "2018 IEEE International WIE Conference on Electrical and Computer Engineering, 2018",
                italic: true,
                size: 16,
              }),
            ],
            spacing: { after: 20 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Link: ",
                size: 16,
              }),
              new TextRun({
                text: "https://ieeexplore.ieee.org/abstract/document/8783017",
                size: 16,
                color: "0066cc",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "0066cc",
                },
              }),
            ],
            spacing: { after: 240 },
          }),

          // Awards & Achievements
          new Paragraph({
            children: [
              new TextRun({
                text: "Awards & Recognition",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• STEM Graduate Fellowship (Federal) - UT Arlington (2022-Ongoing)",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Dean's Graduate Research Assistant - UT Arlington (Summer 2024)",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Travel Grant to 13th Summer School on Formal Techniques - Stanford Research Institute (2024)",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Qualified for 2018 ICPC Asia Dhaka Regional Programming Contest (2018)",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Inter Department Debate Champion - Military Institute of Science and Technology (2019)",
                size: 20,
              }),
            ],
            spacing: { after: 240 },
          }),

          // Leadership Experience
          new Paragraph({
            children: [
              new TextRun({
                text: "Leadership Experience",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• General Secretary - Bangladesh Student Organization at UTA (2025-26)",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• Joint Sports Secretary - Bangladesh Student Organization at UTA (2023-24)",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "• President - MIST Computer Club, Military Institute of Science and Technology (2019)",
                size: 20,
              }),
            ],
            spacing: { after: 240 },
          }),

          // Technical Skills
          new Paragraph({
            children: [
              new TextRun({
                text: "Technical Skills",
                bold: true,
                size: 24,
                color: "2d3748",
                underline: {
                  type: UnderlineType.SINGLE,
                  color: "2d3748",
                },
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Programming Languages: ",
                bold: true,
                size: 20,
              }),
              new TextRun({
                text: "Python, Java, Kotlin, C++, JavaScript, R",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Machine Learning: ",
                bold: true,
                size: 20,
              }),
              new TextRun({
                text: "TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Development: ",
                bold: true,
                size: 20,
              }),
              new TextRun({
                text: "Android Development, Git, Docker, REST APIs",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Databases: ",
                bold: true,
                size: 20,
              }),
              new TextRun({
                text: "MySQL, PostgreSQL, MongoDB",
                size: 20,
              }),
            ],
            spacing: { after: 40 },
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Tools: ",
                bold: true,
                size: 20,
              }),
              new TextRun({
                text: "Jupyter, Android Studio, IntelliJ IDEA, VS Code",
                size: 20,
              }),
            ],
            spacing: { after: 240 },
          }),
        ],
      }],
    });

    // Generate the Word document
    const buffer = await Packer.toBuffer(doc);
    const wordPath = path.join(__dirname, 'Shovon_Niverd_Pereira_CV.docx');
    
    fs.writeFileSync(wordPath, buffer);
    
    console.log(`✅ Word document generated successfully: ${wordPath}`);
    console.log('📄 Your CV has been converted to MS Word format!');
    
  } catch (error) {
    console.error('❌ Error generating Word document:', error);
  }
}

// Run the conversion
convertMarkdownToWord();
