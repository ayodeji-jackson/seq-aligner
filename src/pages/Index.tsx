import { Link } from "react-router-dom";
import { Line, Design, Vector } from "../assets";

export default function Index() {
  return (
    <>
      <main className="mx-auto w-fit">
        <div className="px pr-px">
          <div className="md:bg-img md:bg-[50vw] xl:bg-right bg-no-repeat relative">
            <span className="absolute top-5 left-[40%]">
              <Vector />
            </span>
            <div className="py-24">
              <h2 className="md:w-6/12 lg:7/12 font-bold text-4xl lg:text-6xl md:leading-snug tracking-wider mb-4 relative">
                DNA{" "}
                <span className="relative">
                  Sequence{" "}
                  <span className="absolute bottom-0 -left-0 -z-10 hidden lg:inline">
                    <Line />
                  </span>
                </span>{" "}
                Alignment Interface
                <span className="absolute -right-0 md:-right-[calc(5vw+10px)]">
                  <Design />
                </span>
              </h2>
              <p className="md:w-6/12 lg:w-5/12 mb-10">
                Designed for both novice researchers and seasoned scientists,
                this platform offers precision, user-friendly features, and
                unparalleled accuracy. Explore genetic linkages, identify
                variations, and gain insights into biological data like never
                before
              </p>
              <div className="flex items-center gap-8">
                <Link
                  to="/product"
                  className="bg-primary transition hover:brightness-95 text-white px-4 lg:px-8 py-3 lg:py-4 rounded-xl"
                >
                  Get started
                </Link>
                <a className="font-medium">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-[#F6FAFD] px flex flex-col md:flex-row gap-5 py-12">
          <div className="bg-white border-[#DFDFDF] border px-5 py-10 rounded-lg flex-1 space-y-5">
            <h2 className="text-xl font-medium relative w-fit">
              <span className="relative z-10">Step One</span>
              <span className="absolute border-[4px] border-secondary w-9 bg-primary bottom-[4px] -right-4"></span>
            </h2>
            <p className="text-sm">
              Begin your gene alignment project by uploading your genetic
              sequence file or filling each text area with your gene sequences.
              Ensure that your data is in an accepted format. Use the ‘Upload’
              button to select and submit your files securely.
            </p>
          </div>
          <div className="bg-white border-[#DFDFDF] border px-5 py-10 rounded-lg flex-1 space-y-5">
            <h2 className="text-xl font-medium relative w-fit">
              <span className="relative z-10">Step Two</span>
              <span className="absolute border-[4px] border-[#3EC1F3] w-9 bg-primary bottom-[4px] -right-4"></span>
            </h2>
            <p className="text-sm">
              Having filled the input fields with the data, wait for the upload
              confirmation before proceeding to the next step.
            </p>
          </div>
          <div className="bg-white border-[#DFDFDF] border px-5 py-10 rounded-lg flex-1 space-y-5">
            <h2 className="text-xl font-medium relative w-fit">
              <span className="relative z-10">Step Three</span>
              <span className="absolute border-[4px] border-[#FFB7D5] w-9 bg-primary bottom-[4px] -right-4"></span>
            </h2>
            <p className="text-sm">
              Once the gene sequences are aligned. You can download the full
              analysis results by clicking on the ‘Download’ button.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
