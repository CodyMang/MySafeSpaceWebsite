import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
function Docs() {
    return (
        <Container>
            <h1 class="fs-1 fw-bolder">Documentation</h1>
            <Card className="bg-light m-5">
                <Card.Header>How our application works</Card.Header>
                <Card.Body>
                    <Card.Text>
                        In this section, there will be instructions on several features that are included in our application. Some of 
                        these features include Presets for what kind of security you want to have on your computer, customizable settings,
                        system care such as updates and removing files, and an automatic and manual backup for your computer.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr/>
            <br/>

            <h1 class="fs-1 fw-bold">Harden</h1>
            <p class="p-2">The hardening area of the application can be split into five different parts, Security Presets, Custom Options, SystemCare,
                Auto Backups, and Logs.
            </p>
            <Card className="bg-light m-5">
                <Card.Header>Security Presets</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                        For this feature there are three options that a user can choose from, High Security, Medium Security, and Low Security.
                        High Security changes the operating system's security to reflect a computer that would need top security and the fewest 
                        amount of vulnerability possibilities. Medium Security changes the operating system's security to reflect a computer that 
                        needs good security but still has access to common services such as Apache, DHCP, and DNS. Lastly, the Low Security setting
                        changes the operating system's security to reflect a private computer used as a home desktop. Services such as Bluetooth 
                        and printers are still enabled.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr className="Line"/>
            <Card className="bg-light m-5">
                <Card.Header>Customize Option</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                        The “Customize” button on the presets page navigates to another window. Select from the menu on the left hand side to change 
                        between custom settings. Here the user can set custom password rules and set days before requiring a password change. Hit apply
                         to save the changes. For the change passwords section, Select users you want to change passwords for, then enter the new 
                         password and hit apply. For the change sudoers, Displays two lists of Sudoers and Users. Select the account(s) you wish
                          to change and click the left or right arrows to add or remove sudo privileges. For Services, Right click on a service to 
                          bring up the service options menu. Here you can either start, stop, enable, or disable services. To sort services by name 
                          click the table heading. With the IPtables, the user can change IPTable policies by using the menu buttons on the bottom.
                          To change a policy, click the ‘Change Policies’ button and select the options needed and submit. To add a new rule click 
                          the ‘Add Rule’ button at the bottom of the window. To remove a rule click the ‘Remove Rule’ button and input the chain type,
                           line number and hit submit.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr className="Line"/>
            <Card className="bg-light m-5">
                <Card.Header>SystemCare</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                    Checks for OS and application updates, cleans junk and temp files,
                     and removes any broken dependencies. This might take a while depending on the machine.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr className="Line"/>
            <Card className="bg-light m-5">
                <Card.Header>Auto Backup</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                    Using Timeshift, users can create an automatic backup for their OS as well as run a manual 
                    backup. It is separate from the My Safe Space software, so the user will need to do a quick 
                    installation of the Timeshift application when first attempting to use the Automatic backup feature.
                    For first time use you will be prompted to set up Timeshift. Follow the directions on screen. 
                    Once the setup is done you will now be able to use the Automatic back up from the Timeshift application.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr className="Line"/>
            <Card className="bg-light m-5">
                <Card.Header>Logs</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                    This is where all changes that the software makes to the user’s Linux System gets logged. 
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr/>
            <br/>

            <h1 class="fs-1 fw-bold">Resources</h1>
            <p class="p-5">The resources tab has three sub tabs; News Outlets, Tools, and Other Apps. Here you 
            can find many commonly used resources in the Security and IT field. Since My Safe Space is an offline 
            application, simply click on the outlet or tool you would like to learn more about and it will open 
            the resource in your default web browser. 
            </p>

            <br/>
            <hr className="Line"/>
            <Card className="bg-light m-5">
                <Card.Header>News Outlet</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                    These outlets are all security related. One of the best ways to stay secure is by keeping 
                    yourself informed on the latest leaks, breaches, and vulnerabilities.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr className="Line"/>
            <Card className="bg-light m-5">
                <Card.Header>Tools</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                    Here you will find a list of security related tools commonly used by us at My Safe Space 
                    and the security industry. Some of the tools listed here can help determine if your information 
                    has been leaked or even inform you if your system or systems used by you have known vulnerabilities.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <hr className="Line"/>
            <Card className="bg-light m-5">
                <Card.Header>Other Apps</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">
                    Here are other security or security adjacent applications that are used commonly enough in the industry 
                    that we felt were worth including.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    ); 
}

export default Docs;