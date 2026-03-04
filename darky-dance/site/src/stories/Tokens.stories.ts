export default {
  title: 'Foundation/Tokens',
};

export const PaletteAndSpacing = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'grid';
    wrapper.style.gap = '1rem';

    wrapper.innerHTML = `
      <div style="display:grid;gap:.5rem">
        <h3 style="margin:0">Color tokens</h3>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap">
          <span style="background:var(--color-bg);padding:.5rem .75rem;border-radius:999px;border:1px solid var(--color-border)">--color-bg</span>
          <span style="background:var(--color-surface);padding:.5rem .75rem;border-radius:999px;border:1px solid var(--color-border)">--color-surface</span>
          <span style="background:var(--color-primary);color:#071119;padding:.5rem .75rem;border-radius:999px">--color-primary</span>
          <span style="background:var(--color-accent);padding:.5rem .75rem;border-radius:999px">--color-accent</span>
        </div>
      </div>
      <div style="display:grid;gap:.5rem">
        <h3 style="margin:0">Space tokens</h3>
        <div style="display:flex;align-items:center;gap:.75rem">
          <span style="inline-size:var(--space-sm);block-size:10px;background:var(--color-primary)"></span>
          <span style="inline-size:var(--space-lg);block-size:10px;background:var(--color-primary)"></span>
          <span style="inline-size:var(--space-2xl);block-size:10px;background:var(--color-primary)"></span>
        </div>
      </div>
    `;

    return wrapper;
  },
};
