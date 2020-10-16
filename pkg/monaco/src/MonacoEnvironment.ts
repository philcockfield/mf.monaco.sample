(self as any).MonacoEnvironment = {
  getWorkerUrl: function(_moduleId: any, label: string) {
    const toFilename = (label: string) => {
      if (label === 'json') {
        return 'json.worker.js';
      }
      if (label === 'css') {
        return 'css.worker.js';
      }
      if (label === 'html') {
        return 'html.worker.js';
      }
      if (label === 'typescript' || label === 'javascript') {
        return 'ts.worker.js';
      }
      return 'editor.worker.js';
    };

    const isFederated = window.location.port !== '3001'; // HACK!! 🐷 (not a real tactic)

    const base = isFederated ? 'http://localhost:3001' : '.';
    const url = `${base}/${toFilename(label)}`;

    console.log('MonacoEnvironment.getWorkerUrl: ', url);
    return url;
  },
};
