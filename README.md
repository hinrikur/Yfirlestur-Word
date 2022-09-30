# Microsoft Word spelling and grammar add-in for Icelandic

This repo contains the source code for *Yfirlestur Word*, a spelling and grammar correction add-in for Icelandic, for use with Microsoft Word.

*Yfirlestur Word* was developed and tested using the [Yfirlestur.is](https://yfirlestur.is/) public API for spelling and grammar correction, which was owned and operated by [Miðeind ehf.](https://mideind.is/). 

## Installation

### Prerequisites 

- Make sure you're running at least [Node.js](https://nodejs.org/en/download/) v10 and `npm` v6.

- You'll need to have [Microsoft Word](https://www.microsoft.com/en-ww/microsoft-365/word) installed on your machine.

- *Yfirlestur Word* requires an external backend for performing the spelling and grammar correction. During development, the [Yfirlestur.is](https://yfirlestur.is/) public API was used. The API is owned and operated by [Miðeind ehf.](https://mideind.is/) 


### Getting started

Clone the repo and install the dependencies.

```bash
git clone https://github.com/hinrikur/Yfirlestur-Word.git
cd Yfirlestur-Word
npm install
```

**Note:** If you're testing your add-in on Mac, run the following command before proceeding. When you run this command, the local web server starts.

```bash
npm run dev-server
```

To run the add-in locally, run the following command in the root directory of the add-in

```bash
npm start
```




### Trying it out

In Word, open a new document, choose the Home tab, and then choose the *Yfirlestur fyrir íslensku* button in the ribbon to open the add-in task pane.

## Acknowledgements

- University of Iceland

This project was funded (partly) by the Language Technology Programme for Icelandic 2019-2023. The programme, which is managed and coordinated by [Almannarómur](https://almannaromur.is/), is funded by the Icelandic Ministry of Education, Science and Culture.

## License

This software is licensed under the MIT License:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED - THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SO
