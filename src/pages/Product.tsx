import { FormEvent, useState } from "react";
import bioseq from 'bioseq';
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [seq1, setSeq1] = useState("ATAGCTAGCTAGCATAAGC");
  const [seq2, setSeq2] = useState("AGCTAcCGCAT");
  const [match, setMatch] = useState(1);
  const [mismatch, setMismatch] = useState(-1);
  const [gap, setGap] = useState(-1);
  const [extension, setExtension] = useState(-1);

  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/product/result', { state: [seq1, seq2, match, mismatch, gap, extension] });
  };

  const showFile = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result?.toString().split(/\s+/)!;
      setSeq1(text[0]);
      setSeq2(text[1]);
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  }

  return (
    <>
      <form
        className="mx 2xl:mx-auto flex flex-col items-center gap-4 relative my-12 text-xs"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <div className="border-[#DFDFDF] border rounded-lg px-6 sm:pr-12 py-8 space-y-4">
            <label className="block font-bold text-xl" htmlFor="seq1">Sequence 1</label>
            <textarea
              id="seq1"
              value={seq1}
              required
              onChange={(e) => setSeq1(e.target.value)}
              placeholder="Enter Sequence 1 here..."
              className="border-[.5px] border-[#A15842] outline-none px-3 py-1.5 md:w-[calc(200px+10vw)] h-[176px] tracking-[.06em]"
            ></textarea>
          </div>
          <div className="border-[#DFDFDF] border rounded-lg px-6 sm:pr-12 py-8 space-y-4">
            <label className="block font-bold text-xl" htmlFor="seq2">Sequence 2</label>
            <textarea
              id="seq2"
              value={seq2}
              required
              onChange={(e) => setSeq2(e.target.value)}
              placeholder="Enter Sequence 2 here..."
              className="border-[.5px] border-[#A15842] outline-none px-3 py-1.5 md:w-[calc(200px+10vw)] h-[176px] tracking-[.06em]"
            ></textarea>
          </div>
        </div>
        <p className="text-base font-medium">Or</p>
        <div className="border-[#DFDFDF] border rounded-lg px-8 py-12">
          <label
            className="border border-secondary px-10 md:px-20 py-16 rounded-lg block cursor-pointer"
            htmlFor="file"
          >
            <p className="border border-[#A15842] text-[#A15842] rounded-md md:rounded-xl px-4 md:px-8 py-2 md:py-3 md:text-base text-nowrap">
              Upload file
            </p>
            <input type="file" hidden id="file" onChange={showFile} />
          </label>
        </div>
        <div className="mt-20">
          <div className="grid sm:grid-cols-2 gap-y-5 md:gap-y-10 gap-x-10 lg:gap-x-20">
            <label className="space-y-2">
              <span>Match Score</span>
              <input
                type="number"
                value={match}
                onChange={(e) => setMatch(+e.target.value)}
                className="border-[.5px] border-[#A15842] outline-none px-3 py-1.5 block"
              />
            </label>
            <label className="space-y-2">
              <span>Mismatch</span>
              <input
                type="number"
                value={mismatch}
                onChange={(e) => setMismatch(+e.target.value)}
                className="border-[.5px] border-[#A15842] outline-none px-3 py-1.5 block"
              />
            </label>
            <label className="space-y-2">
              <span>Gap Open</span>
              <input
                type="number"
                value={gap}
                onChange={(e) => setGap(+e.target.value)}
                className="border-[.5px] border-[#A15842] outline-none px-3 py-1.5 block"
              />
            </label>
            <label className="space-y-2">
              <span>Extension</span>
              <input
                type="number"
                value={extension}
                onChange={(e) => setExtension(+e.target.value)}
                className="border-[.5px] border-[#A15842] outline-none px-3 py-1.5 block"
              />
            </label>
          </div>
        </div>
        <button className="md:absolute bg-primary transition hover:brightness-95 text-white px-4 md:px-8 py-3 md:py-3 rounded-md md:rounded-xl bottom-0 right-0 md:text-base">
          Submit
        </button>
      </form>
      <section className="bg-[#F6FAFD] h-[264px]"></section>
    </>
  );
}
