import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4 items-center">
        <h1 className="text-2xl font-bold text-myColor-primary">{title}</h1>
        {linkHref && linkTitle ?
        <Link
            href={linkHref}
            className="md:text-xl text-md underline text-myColor-primary hover:text-myColor-accent transition-all">
            {linkTitle}
        </Link>
        : 
        null
        }
        </div>
    );
};

export default Header;