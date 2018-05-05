import { Injectable, Inject } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Import clipboard.js
import 'clipboard';

// Basic Prism import
import 'prismjs';

// Prism Plugins
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/command-line/prism-command-line';
import 'prismjs/plugins/keep-markup/prism-keep-markup';
import 'prismjs/plugins/show-language/prism-show-language';
//import 'prismjs/plugins/copy-to-clipboard/copy-to-clipboard';

// Prism basic highlight syntax
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';

//  additional language syntaxes
import 'prismjs/components/prism-apacheconf';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-handlebars';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-makefile';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-yaml';

let Prism: any;

@Injectable()
export class PrismService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
