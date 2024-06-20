import Image from "next/image";

export const Projects = () => {
  const portfolioImages = Array.from(
    { length: 12 },
    (_, i) => `/images/projects/project${i + 1}.jpeg`
  );

  return (
    <section id="projetos" className="py-20 bg-gray-100 w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image}
                alt={`Portfolio Image ${index + 1}`}
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
