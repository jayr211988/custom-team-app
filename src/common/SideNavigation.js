import { Heading } from "@radix-ui/themes";

export default function SideNavigation() {

  return (
  <div className="sidebar-navigation-container">
    <div className="sidebar-nav-logo">SM Logo</div>
    <Heading>Active Menu</Heading>
    <div>
        <div>Settings</div>
        <div>Log out</div>
    </div>

  </div>
  )
}
