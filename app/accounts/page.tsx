import Contact from "@/components/Contact";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="px-6 pt-10 overflow-x-hidden">
        <h3 className="text-center heading mt-8">Accounts</h3>
        <div className="flex justify-center items-center mt-8 ">
          <Image
            className=" "
            src="/images/tax.svg"
            width={450}
            height={450}
            alt="acclogo"
          />
        </div>
        <p className="lg:px-28 mt-4 text-center">
          For small businesses, hiring a full-time accountant could be a costly
          affair. Also, relying on a junior, inexperienced accountant comes with
          risks such as non-compliance with statutory requirements and the
          hassle of finding replacements in case of turnover. But fear not!
          Simplifyr is here with tech-savvy solutions to revolutionize your
          financial operations.
        </p>
        <div className="space-y-10 px-4 py-6 lg:w-[80%] mx-auto mt-8">
          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Accounting/Bookkeeping
              </h3>
              <p>
                Seamlessly manage daily, monthly, or quarterly bookkeeping
                needs, whether on-site or off-site, and with support for both
                cloud and desktop-based accounting software.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/calculator.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/accounts.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Finalization of Statutory Accounts
              </h3>
              <p>
                Let our tech-driven approach streamline the finalization of
                year-end accounts, including reconciliation of balances,
                rectification of errors, and coordination with auditors for
                various audits.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Payroll Processing
              </h3>
              <p>
                Simplify payroll management with automated processes for income
                tax declarations, CTC structuring advice, payslip generation,
                and more.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/process.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/clipboard.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Tax Compliance
              </h3>
              <p>
                Stay up to date with ever-changing tax laws and ensure timely
                filing of income tax, GST, and professional tax returns with our
                expert consultancy services
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Company Law & Labour Law Compliance
              </h3>
              <p>
                Navigate the complexities of company law and labour law with
                ease, from preparation and filing of ROC annual returns to
                maintenance of various registers under labour laws.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/law.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>
        </div>
        <p className="lg:px-28 mt-8 text-center">
          With SimplifyR, you not only simplify your financial processes but
          also gain peace of mind knowing that your accounting and compliance
          needs are in expert hands. Embrace technology to simplify your
          finances with Simplifyr&#39;s Accounting Expertise.
        </p>
        <Contact />
      </div>
    </>
  );
};

export default page;
