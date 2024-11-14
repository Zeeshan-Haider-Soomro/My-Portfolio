import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between text-primary dark:text-white/70">
          <Socials containerStyles='flex gap-x-6 mx-auto mb-4 xl:mx-0' iconStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all' />
          <div className="text-muted-foreground p-5">
            Copyright &copy; Zeeshan Haider Soomro. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;