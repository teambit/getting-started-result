---
description: Retrieves and displays tech jokes
labels: ['jokes', 'ui', 'react', 'typescript']
---

import { TechJokesViewer } from './tech-jokes-viewer'

### Using TechJokesViewer

The TechJokesViewer fetches jokes from a remote API and your local storage.  
Toggle between local and remote jokes using the `local` prop.

```jsx live
<TechJokesViewer local={false} />
```
