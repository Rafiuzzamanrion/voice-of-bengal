import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Login from "./api/auth/login/page";
import Signup from "./api/auth/signup/page";

export default function Home() {
  return (
    <div>
      <Signup />
    </div>
  );
}
