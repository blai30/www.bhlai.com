import { Component } from '@angular/core';
import { Skill } from "./skill.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
})
export class SkillsComponent {
  skills: Skill[][] = [
    [
      {
        skillName: 'C#',
        svgPath: 'assets/logos/csharp-original.svg',
        vendorUrl: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      },
      {
        skillName: 'Java',
        svgPath: 'assets/logos/java-icon.svg',
        vendorUrl: 'https://openjdk.java.net/',
      },
      {
        skillName: 'TypeScript',
        svgPath: 'assets/logos/typescript-original.svg',
        vendorUrl: 'https://www.typescriptlang.org/',
      },
      {
        skillName: 'JavaScript',
        svgPath: 'assets/logos/javascript-original.svg',
        vendorUrl: 'https://www.javascript.com/',
      },
      {
        skillName: 'Python',
        svgPath: 'assets/logos/python-icon.svg',
        vendorUrl: 'https://www.python.org/',
      },
      {
        skillName: 'C++',
        svgPath: 'assets/logos/cplusplus-original.svg',
        vendorUrl: 'https://www.cplusplus.com/',
      },
    ],
    [
      {
        skillName: '.NET',
        svgPath: 'assets/logos/dotnet.svg',
        vendorUrl: 'https://dotnet.microsoft.com/',
      },
      {
        skillName: 'Angular',
        svgPath: 'assets/logos/angular.svg',
        vendorUrl: 'https://www.angular.io/',
      },
      {
        skillName: 'React',
        svgPath: 'assets/logos/react-original.svg',
        vendorUrl: 'https://reactjs.org/',
      },
      {
        skillName: 'NodeJS',
        svgPath: 'assets/logos/nodejs-original.svg',
        vendorUrl: 'https://nodejs.org/',
      },
      {
        skillName: 'Blazor',
        svgPath: 'assets/logos/Blazor.png',
        vendorUrl: 'https://blazor.net/',
      },
      {
        skillName: 'MySQL',
        svgPath: 'assets/logos/mysql.png',
        svgPathDark: 'assets/logos/mysql-dark.png',
        vendorUrl: 'https://www.mysql.com/',
      },
    ],
    [
      {
        skillName: 'Unity',
        svgPath: 'assets/logos/unity-white.png',
        svgPathDark: 'assets/logos/unity-black.png',
        vendorUrl: 'https://unity.com/',
      },
      {
        skillName: 'Tailwind CSS',
        svgPath: 'assets/logos/tailwindcss.svg',
        vendorUrl: 'https://tailwindcss.com/',
      },
      {
        skillName: 'Bootstrap',
        svgPath: 'assets/logos/bootstrap-logo.svg',
        vendorUrl: 'https://getbootstrap.com/',
      },
      {
        skillName: 'Docker',
        svgPath: 'assets/logos/docker.png',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Amazon Web Services',
        svgPath: 'assets/logos/aws.svg',
        svgPathDark: 'assets/logos/aws-dark.svg',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Google Cloud Platform',
        svgPath: 'assets/logos/google-cloud.svg',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Figma',
        svgPath: 'assets/logos/figma.svg',
        vendorUrl: 'https://www.figma.com/',
      },
      {
        skillName: 'Sketch',
        svgPath: 'assets/logos/sketch.png',
        vendorUrl: 'https://www.sketch.com/',
      },
    ],
  ];
}
