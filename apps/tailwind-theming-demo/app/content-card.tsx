
export type ContentCardProps = {
    // children: React.ReactNode;
    header: string;
    description: string;
}

export default function ContentCard({ header, description }: ContentCardProps) {
    return <div className="bg-surface-default rounded-xl p-6 border border-highlight group">
        <div className="h-10 w-10 bg-surface-primary-strong rounded">

        </div>
        <div className="mt-3 text-default-strong group-hover:text-selected">
            {header}
        </div>
        <div className="mt-2 text-default-subdued">{description}</div>
    </div>
}