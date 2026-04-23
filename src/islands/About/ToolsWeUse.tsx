const tools = [
    {
        name : "Figma"
    },
    {
        name : "Adobe XD"
    },
    {
        name : "Sketch"
    },
    {
        name : "Photoshop"
    },
    {
        name : "Illustrator"
    },
    {
        name : "React"
    },
    {
        name : "Next.js"
    },
    {
        name : "Typescript"
    },
    {
        name : "Node.js"
    },
    {
        name : "Tailwind CSS"
    },
    {
        name : "Framer Motion"
    },
    {
        name : "Three.js"
    },
    {
        name : "WebGL"
    },
    {
        name : "Git"
    },
    {
        name : "AWS"
    },
]
export const ToolsComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center py-40 gap-5">
            <div>
                <h2 className="text-4xl font-bold">Tools We Use</h2>
                <h4>Industry-leading technologies and platforms</h4>
            </div>

            <div className="flex flex-wrap justify-center items-center mt-8 gap-2 max-w-[calc(9*100px)]">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="border transition-colors border-[#00A9BD] py-0.5 px-4 rounded-xl bg-linear-to-br from-[#05383E] to-[#000000] w-fit hover:bg-linear-to-tl hover:from-[#46B6A0] hover:to-[#05383E] "

                    >
                        <h3 className="font-bold">{tool.name}</h3>
                    </div>
                ))}
            </div>


        </div>
    );
};
