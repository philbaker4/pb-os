// import { listColorUtilities } from "tailwind";
// import { lightTheme } from "../themes/light";
// listColorUtilities(lightTheme.colors)

const colorUtilities = [
  'bg-default',
  'bg-surface-default',
  'bg-surface-default-subdued',
  'bg-surface-default-selected',
  'bg-surface-highlight',
  'bg-surface-highlight-subdued',
  'bg-surface-primary',
  'bg-surface-primary-strong',
]

export default async function Index() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 text-default">
        <div className="text-xl font-semibold">
          Background Colors
        </div>
        <div className="grid grid-cols-3 gap-8 mt-12 ">
          {colorUtilities.map(cu => {
            return <div key={cu}>
              <div>{cu}</div>
              <div className={` w-full h-24 rounded-xl ${cu} border`}>

              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
}
