import { HiFilm } from 'react-icons/hi2';
import Section from '../../components/UI/Section';

const DocumentariesPage = () => {
  return (
    <>
      {/* Header */}
      <div className="relative bg-white text-black border-b border-gray-100 pt-16 md:pt-20">
        <div className="container-custom py-10 md:py-12">
          <div className="max-w-3xl">
            {/* <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              Documentary
            </span> */}

            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Animal Rights Documentaries
            </h1>

            <p className="text-lg text-gray-600">
              Films that explore the injustices met towards animals and
              challenge the way we think about animals, food systems, and compassion.
            </p>
          </div>
        </div>
      </div>

      {/* Documentary Section */}
      <Section dark={false}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Video */}
          <div className="lg:col-span-8">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/HbNJJsewrLQ"
                title="Maa Ka Doodh Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-4">
            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-3">
                <HiFilm className="h-6 w-6 text-accent mr-2" />
                <span className="font-bold text-sm uppercase tracking-wide">
                  Featured Documentary
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Maa Ka Doodh (Mother’s Milk)
              </h2>

              <p className="text-gray-700 mb-4">
                An investigative documentary that explores India’s massive dairy
                industry and the hidden consequences behind milk production.
              </p>

              <p className="text-gray-700">
                Following a two-year journey across India, the film examines how
                dairy farming affects animals, farmers, public health, and the
                environment, while questioning the cultural and economic systems
                that sustain dairy consumption.
              </p>
            </div>
          </div>

        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white py-16">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Learn More?
          </h2>

          <p className="text-gray-400 mb-8">
            Understanding the truth is the first step toward creating a just world.
          </p>

          <a href="/support" className="btn btn-primary px-8">
            Support Our Work
          </a>
        </div>
      </Section>
    </>
  );
};

export default DocumentariesPage;
