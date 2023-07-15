import React, { useEffect } from "react"
import { terminal } from "./data"
import { SocialMedia, email, CVLink } from "../../../../assets/data";

// Banner text
const banner = `
Initializing PauloShell 3000 v1.0
Copyright (c) 2023 Paulo Reizinho <paulolopesreizinho@gmail.com>

.............................................................................

@@@  @@@  @@@  @@@@@@@@  @@@        @@@@@@@   @@@@@@   @@@@@@@@@@   @@@@@@@@
@@@  @@@  @@@  @@@@@@@@  @@@       @@@@@@@@  @@@@@@@@  @@@@@@@@@@@  @@@@@@@@
@@!  @@!  @@!  @@!       @@!       !@@       @@!  @@@  @@! @@! @@!  @@!     
!@!  !@!  !@!  !@!       !@!       !@!       !@!  @!@  !@! !@! !@!  !@!     
@!!  !!@  @!@  @!!!:!    @!!       !@!       @!@  !@!  @!! !!@ @!@  @!!!:!  
!@!  !!!  !@!  !!!!!:    !!!       !!!       !@!  !!!  !@!   ! !@!  !!!!!:  
!!:  !!:  !!:  !!:       !!:       :!!       !!:  !!!  !!:     !!:  !!:     
:!:  :!:  :!:  :!:        :!:      :!:       :!:  !:!  :!:     :!:  :!:     
:::: :: :::    :: ::::   :: ::::   ::: :::  ::::: ::  :::     ::    :: ::::
  :: :  : :    : :: ::   : :: : :   :: :: :   : :  :    :      :    : :: :: 

-----------------------------------------------------------------------------
This terminal is a simulation, not the real one.
-----------------------------------------------------------------------------

Type 'help for a list of available commands.

`;

const Mobilebanner = `
Copyright (c) 2023 Paulo Reizinho
<paulolopesreizinho@gmail.com>

Type 'help' for a list of commands.

`

// Help text
const helpText = `
Available commands:

help - This output
contact - Prints contact information
open <key> - Opens up relevant contact link or file
clear - Clears the display
ls - Lists files
pwd - Lists current directory
cd <dir> - Enters directory
cat <filename> - Lists file contents
`;

// Contact texts
const contactInfo = {
  email: email,
  github: SocialMedia[0].link,
  linkedin: SocialMedia[1].link,
  instagram: SocialMedia[2].link,
};

const documents = {
  cv: CVLink
}

const contactList = Object.keys(contactInfo)
  .reduce((result, key) => result.concat([`${key} - ${contactInfo[key]}`]), [])
  .join('\n');

const contactText = `

${contactList}

Type 'open to redirect you to the following contact.
`;
// Use ex. 'contact twitter' to open the links.

const notFound = `File not found

Type 'help for a list of available commands.

`

const openContact = key => window.open(key === 'email'
  ? `mailto:${contactInfo[key]}`
  : contactInfo[key]);

const openDoc = key => window.open(documents[key]);

// File browser
const browser = (function () {
  let current = '/';

  let tree = [
    {
      location: '/',
      filename: 'documents',
      type: 'directory'
    },
    {
      location: '/documents',
      filename: 'cv',
      type: 'file',
      content: CVLink
    },
    {
      location: '/',
      filename: 'author',
      type: 'file',
      content: `
    Paulo Reizinho < ${email}>
    I come from Portugal
    Born January 4th, 1986, in a small town Nisa,
    Lived my most my life in Gavião,
    Now I currently live in Zurich, Switzerland.
    `
    }
  ];

  const fix = str => str.trim().replace(/\/+/g, '/') || '/';

  const setCurrent = dir => {
    if (typeof dir !== 'undefined') {
      if (dir == '..') {
        const parts = current.split('/');
        parts.pop();
        current = fix(parts.join('/'));
      } else {
        const found = tree.filter(iter => iter.location === current)
          .find(iter => iter.filename === fix(dir));

        if (found) {
          current = fix(current + '/' + dir);
        } else {
          return `Directory '${dir}' not found in '${current}'`;
        }
      }

      return `Entered '${current}'`;
    }

    return current;
  };

  const ls = () => {
    const found = tree.filter(iter => iter.location === current);
    const fileCount = found.filter(iter => iter.type === 'file').length;
    const directoryCount = found.filter(iter => iter.type === 'directory').length;
    const status = `${fileCount} file(s), ${directoryCount} dir(s)`;
    const maxlen = Math.max(...found.map(iter => iter.filename).map(n => n.length));

    const list = found.map(iter => {
      return `${iter.filename.padEnd(maxlen + 1, ' ')} <${iter.type}>`;
    }).join('\n');

    return `${list}\n\n${status} in ${current}`;
  };

  const cat = filename => {
    const found = tree.filter(iter => iter.location === current);
    const foundFile = found.find(iter => iter.filename === filename);

    if (foundFile) {
      return foundFile.content;
    }

    return `File '${filename}' not found in '${current}'`;
  };

  return {
    pwd: () => setCurrent(),
    cd: dir => setCurrent(fix(dir)),
    cat,
    ls
  };
})();

// document.addEventListener('DOMContentLoaded', load);

export default function TerminalComponent() {

  useEffect(() => {
    const load = () => {
      const t = terminal({
        prompt: () => `$ ${browser.pwd()} > `,
        banner: window.innerWidth >= 640 ? banner : Mobilebanner,
        commands: {
          help: () => helpText,
          pwd: () => browser.pwd(),
          cd: dir => browser.cd(dir),
          ls: () => browser.ls(),
          cat: file => browser.cat(file),
          clear: () => t.clear(),
          contact: (key) => {
            if (key in contactInfo) {
              openContact(key);
              return `Opening ${key} - ${contactInfo[key]}`;
            }
            return contactText;
          },

          open: (key) => {
            if (key in contactInfo) {
              openContact(key);
              return `Opening ${key} - ${contactInfo[key]}`;
            }
            if (key in documents) {
              openDoc(key);
              return `Opening ${key} - ${documents[key]}`;
            }

            return notFound;
          }
        }
      });
    };

    load();
  }, []);

  return (
    <>
      <div id="crt" className="hidden lg:block">
        <div id="screen">
          <div id="wrapper">
            <div id="interlace"></div>
            <div id="scanline"></div>
            <div id="envelope">
              <div id="terminal"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
