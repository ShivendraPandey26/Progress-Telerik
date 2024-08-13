import React from "react";
import Card from "./Card";

function Feature() {
  const data = [
    {
      title: ".NET",
      heading: "DevCraft",
      description: ".NET UI controls, reporting and developer productivity tools",
      buttonText: "Learn more",
      color: "#15803d",
    },
    {
      title: "NATIVE MOBILE",
      heading: "NativeScript",
      description: "Open source framework for building truly native mobile apps with Angular, TypeScript, or JavaScript",
      buttonText: "Learn more",
      color: "#2563eb",
    },
    {
      title: "HTML5",
      heading: "Kendo UI",
      description: "JavaScript, HTML5 UI widgets for responsive web and data visualization",
      buttonText: "Learn more",
      color: "#dc2626",
    },
    {
      title: "CMS",
      heading: "Progress Sitefinity",
      description: "Web Content Management and Customer Analytics for managing and optimizing digital experiences",
      buttonText: "Learn more",
      color: "#1e1b4b",
    },
    {
      title: "MOBILE",
      heading: "Telerik Platform",
      description: "Complete cross-platform solution to design, build, deploy, manage, and measure all your mobile apps",
      buttonText: "Learn more",
      color: "#1e1b4b",
    },
    {
      title: "TESTING",
      heading: "Test Studio",
      description: "Release better quality software faster with an intuitive and easy-to-use test automation solution",
      buttonText: "Learn more",
      color: "#1e1b4b",
    },
  ];

  return (
    <div className="min-h-screen w-full p-4 sm:p-5 lg:p-20  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            heading={item.heading}
            description={item.description}
            buttonText={item.buttonText}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;
