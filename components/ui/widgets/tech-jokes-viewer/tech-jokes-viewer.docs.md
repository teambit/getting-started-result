---
description: Retrieves and displays tech jokes
labels: ['jokes', 'ui', 'react', 'typescript']
---

import { TechJokesViewer } from './tech-jokes-viewer'

### Toggling between local/remote

The TechJokesViewer retrieves jokes from a remote API as well as your local storage.  
Toggle between local and remote jokes using the `local` prop.

```jsx live=true
<TechJokesViewer local={false} />
```
