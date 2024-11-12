# @scalar/api-client

## 2.1.46

### Patch Changes

- ecdf18d: style(api-client: link to scalar on client + fix some visual bugs
- caa45c9: feat(api-client): change sidenav to header only for web api client view
- 9eb6650: feat: add support for the x-defaultClientId extension
- 4a3c873: fix: adds missing hover in context bar
- 15a47e6: feat: indicate which auth is required
- 576e94a: fix: remove loop from media response
- 09a6fba: fix: add missing proxy on import modal
- be50225: fix: improve API client modal accessibility
- 0a0ca71: style(api-client): make roadmap button slightly more prominent
- Updated dependencies [4bcaa75]
- Updated dependencies [9eb6650]
- Updated dependencies [c98a99c]
- Updated dependencies [c98a99c]
- Updated dependencies [be50225]
  - @scalar/oas-utils@0.2.72
  - @scalar/import@0.1.0
  - @scalar/components@0.12.66
  - @scalar/use-codemirror@0.11.33

## 2.1.45

### Patch Changes

- b89da58: fix: ingest base server URL and use it in the api client
- Updated dependencies [a40999d]
- Updated dependencies [b89da58]
- Updated dependencies [3300d5b]
  - @scalar/object-utils@1.1.12
  - @scalar/use-tooltip@1.0.4
  - @scalar/draggable@0.1.7
  - @scalar/oas-utils@0.2.71
  - @scalar/import@0.0.6
  - @scalar/themes@0.9.47
  - @scalar/components@0.12.65
  - @scalar/icons@0.1.1
  - @scalar/openapi-parser@0.8.9
  - @scalar/openapi-types@0.1.5
  - @scalar/types@0.0.19
  - @scalar/use-codemirror@0.11.32
  - @scalar/use-toasts@0.7.7

## 2.1.44

### Patch Changes

- c3e76d9: fix: handle scopes as an array
- 79d33da: fix: adds default value for params select
- Updated dependencies [779cf35]
- Updated dependencies [c3e76d9]
- Updated dependencies [757fade]
- Updated dependencies [a607115]
  - @scalar/import@0.0.5
  - @scalar/oas-utils@0.2.70
  - @scalar/openapi-parser@0.8.9
  - @scalar/openapi-types@0.1.5
  - @scalar/types@0.0.19
  - @scalar/themes@0.9.46
  - @scalar/components@0.12.64
  - @scalar/use-codemirror@0.11.31

## 2.1.43

### Patch Changes

- a0421dd: fix: request / response section height
- 8c5d767: feat: add support for PKCE auth code flow
- 6a2ec39: fix: only add scopes if we have scopes
- Updated dependencies [8c5d767]
- Updated dependencies [359ee2d]
  - @scalar/oas-utils@0.2.69

## 2.1.42

### Patch Changes

- Updated dependencies [dab543e]
  - @scalar/oas-utils@0.2.68

## 2.1.41

### Patch Changes

- 823c14d: fix: add tests for oauth2 flows, ensure we reject on state mismatch
- Updated dependencies [823c14d]
- Updated dependencies [997cd35]
  - @scalar/oas-utils@0.2.67

## 2.1.40

### Patch Changes

- db4a4b7: fix: favors provide for web layout hotkey display
- c63ab07: fix: sidebar list action button danger
- c929284: fix: add default redirectURI and prefix relative redirectURIs with activeServer
- 2275977: feat: import from way more sources, leverage the proxy more
- e044d78: feat: adds copy capability to environment code input
- e461e5b: feat: adds environment variables synchronization
- Updated dependencies [c929284]
- Updated dependencies [2275977]
- Updated dependencies [3a0c367]
- Updated dependencies [89a2cc7]
- Updated dependencies [f2361b3]
  - @scalar/oas-utils@0.2.66
  - @scalar/import@0.0.4

## 2.1.39

### Patch Changes

- bd8e253: fix: import collection animation
- b9b42f6: fix(api-client): api client button is always visible

## 2.1.38

### Patch Changes

- cf4e9c4: fix(components): resize and scroll scalar listbox and dropdown
- 743474e: feat: adds environment custom colors
- cfe9b85: fix: added safe parsing for oauth examples
- 0fb3a41: fix: sets default environment variable value
- 417e0c7: feat(api-client): add download button to scalar web
- 0e19781: feat: fix reactivitiy of references + client
- Updated dependencies [fb798c8]
- Updated dependencies [cf4e9c4]
- Updated dependencies [3bec045]
- Updated dependencies [743474e]
- Updated dependencies [cfe9b85]
- Updated dependencies [4d45f7b]
- Updated dependencies [6599473]
- Updated dependencies [bb3dc9d]
- Updated dependencies [0e19781]
  - @scalar/types@0.0.18
  - @scalar/components@0.12.63
  - @scalar/oas-utils@0.2.65
  - @scalar/themes@0.9.45
  - @scalar/object-utils@1.1.11
  - @scalar/use-codemirror@0.11.30

## 2.1.37

### Patch Changes

- Updated dependencies [931106f]
  - @scalar/oas-utils@0.2.64

## 2.1.36

### Patch Changes

- 84bd664: style: updates request section ui
- ada8545: feat: add the sidebar button
- 86104fd: fix(api-client): prevent spec import overflowing
- Updated dependencies [ad12c56]
- Updated dependencies [ada8545]
  - @scalar/components@0.12.62
  - @scalar/themes@0.9.44
  - @scalar/oas-utils@0.2.63
  - @scalar/use-codemirror@0.11.29

## 2.1.35

### Patch Changes

- 9f9c5b7: (style)api-client: response flip animation
- 15b6082: fix: favors input on data table password type when masked
- 9affbe3: fix: add an overflow to the dataTableInput to prevent it from overflowing
- 277f95c: style: removes top border and sets overscroll property
- 197e3ae: (style)api-client: make input styles more consistent
- Updated dependencies [097ab40]
- Updated dependencies [197e3ae]
  - @scalar/oas-utils@0.2.62
  - @scalar/components@0.12.61
  - @scalar/themes@0.9.43
  - @scalar/use-codemirror@0.11.28

## 2.1.34

### Patch Changes

- 5995f57: feat: prepare references for the client auth
- 4c1536d: style: updates active setting option ui state
- d7a6c55: fix: updates scalar hotkey component
- d7a6c55: fix: contrains event action to route
- 2456afa: fix: remove theme selection as it was breaking on external sites
- 69bda25: feat: synced up client auth with references
- Updated dependencies [7323370]
- Updated dependencies [d7a6c55]
- Updated dependencies [2456afa]
- Updated dependencies [69bda25]
  - @scalar/openapi-parser@0.8.8
  - @scalar/oas-utils@0.2.61
  - @scalar/themes@0.9.42
  - @scalar/components@0.12.60
  - @scalar/use-codemirror@0.11.27

## 2.1.33

### Patch Changes

- Updated dependencies [7700c50]
  - @scalar/components@0.12.59
  - @scalar/use-codemirror@0.11.26

## 2.1.32

### Patch Changes

- 4ccbb6b: feat: adds settings command to command palette
- 85a1815: fix: increases address bar loading background index
- a12857f: style: environment variable tooltip fixtures
- b500de2: fix: data table cell overflow issue
- 294fde8: feat: adds keyboard navigation within environment variable dropdown
- 0706bc4: fix(api-client): move sidenav to bottom on mobile
- 86a3a82: fix: API client always uses proxy.scalar.com
- 48afb7c: fix: removes stopped propagation on enter key in code input

## 2.1.31

### Patch Changes

- @scalar/components@0.12.58
- @scalar/use-codemirror@0.11.25

## 2.1.30

### Patch Changes

- 6ecb7cc: fix: large response performance problems due to chrome bug, increase virtualization threshold
- 32ad241: fix: favors accent over blur color for active elment state
- Updated dependencies [2b540b9]
- Updated dependencies [32ad241]
  - @scalar/openapi-types@0.1.4
  - @scalar/components@0.12.57
  - @scalar/oas-utils@0.2.60
  - @scalar/openapi-parser@0.8.7
  - @scalar/types@0.0.17
  - @scalar/use-codemirror@0.11.24
  - @scalar/themes@0.9.41

## 2.1.29

### Patch Changes

- c658a7a: fix: support server variables in request sending
- d51d303: fix: add environment variables in auth request fields

## 2.1.28

### Patch Changes

- dea4f88: chore: update wording on settings page

## 2.1.27

### Patch Changes

- 4e50d65: feat: added openapi watcher to live update the api client
- 4e50d65: feat: adds watch toggle in request sidebar item menu
- Updated dependencies [4e50d65]
- Updated dependencies [4e50d65]
- Updated dependencies [4e50d65]
- Updated dependencies [4e50d65]
- Updated dependencies [4e50d65]
- Updated dependencies [6bbb815]
  - @scalar/components@0.12.56
  - @scalar/oas-utils@0.2.59
  - @scalar/themes@0.9.40
  - @scalar/use-codemirror@0.11.23

## 2.1.26

### Patch Changes

- 8223e31: fix: updates proxy default setting
- f8b81ee: fix: new settings page
- 9e769df: fix: sets default request uid to request example
- a80a931: fix: command palette modal overflow

## 2.1.25

### Patch Changes

- Updated dependencies [4722da1]
  - @scalar/themes@0.9.39
  - @scalar/components@0.12.55
  - @scalar/oas-utils@0.2.58

## 2.1.24

### Patch Changes

- 8f4b4a2: fix: ui tweaks and fixes

## 2.1.23

### Patch Changes

- 5cb5cdf: fix: removes duplicated utility class in request header
- 971c04c: feat(api-client): create custom workspace selector
- 75f84f8: fix: sidebar indent lines + icon stroke thickness
- 3800b54: fix: import curl query parameters
- 59d3931: chore: remove unused dependencies
- 2173073: feat: add links to http headers
- c379e5a: feat: adds api client web playground
- aebac4e: style: updates sidenav gap and sidehelp hover
- 4738228: feat: make collection.info.version optional
- Updated dependencies [971c04c]
- Updated dependencies [6394a5d]
- Updated dependencies [dbbe38f]
- Updated dependencies [4b8b611]
- Updated dependencies [4738228]
  - @scalar/components@0.12.55
  - @scalar/openapi-parser@0.8.7
  - @scalar/types@0.0.16
  - @scalar/themes@0.9.38
  - @scalar/oas-utils@0.2.57
  - @scalar/use-codemirror@0.11.22

## 2.1.22

### Patch Changes

- b8f9a95: feat: lower syntax highlighting response threshold
- 0c34a18: chore: updated vue package to 3.5
- Updated dependencies [b8f9a95]
- Updated dependencies [8759e7f]
- Updated dependencies [0c34a18]
  - @scalar/oas-utils@0.2.56
  - @scalar/openapi-types@0.1.3
  - @scalar/use-codemirror@0.11.21
  - @scalar/use-tooltip@1.0.3
  - @scalar/components@0.12.54
  - @scalar/use-toasts@0.7.7
  - @scalar/draggable@0.1.6
  - @scalar/icons@0.1.1
  - @scalar/openapi-parser@0.8.6
  - @scalar/types@0.0.15
  - @scalar/themes@0.9.37

## 2.1.21

### Patch Changes

- Updated dependencies [f935fad]
  - @scalar/components@0.12.53
  - @scalar/use-codemirror@0.11.20

## 2.1.20

### Patch Changes

- 0ddd4f3: feat: added virtual text component
- deb13b9: fix: updates command palette server collection logic
- b99799e: refactor(api-client): localize event bus in workspace store
- Updated dependencies [0ddd4f3]
  - @scalar/components@0.12.52
  - @scalar/oas-utils@0.2.55
  - @scalar/use-codemirror@0.11.19

## 2.1.19

### Patch Changes

- e5ee02f: fix: too many z-index layers
- 8da2152: style: enhances responsiveness
- 2a77f7b: fix: comment out stackBlitz in the ci
- d02d70c: feat: add settings page to api client
- e911047: Add default exports
- 9a2d5ca: feat: adds curl importer
- Updated dependencies [d064a78]
- Updated dependencies [3db9355]
- Updated dependencies [2ff5905]
- Updated dependencies [9a2d5ca]
- Updated dependencies [e911047]
- Updated dependencies [d02d70c]
- Updated dependencies [3acbf26]
  - @scalar/openapi-parser@0.8.6
  - @scalar/oas-utils@0.2.54
  - @scalar/object-utils@1.1.10
  - @scalar/openapi-types@0.1.2
  - @scalar/types@0.0.14
  - @scalar/themes@0.9.36
  - @scalar/components@0.12.51
  - @scalar/icons@0.1.0
  - @scalar/use-codemirror@0.11.18
  - @scalar/use-toasts@0.7.6
  - @scalar/use-tooltip@1.0.2

## 2.1.18

### Patch Changes

- 7c2e291: style: removes comamand palette command label + style fixtures
- 46a55ae: feat(api-client): improve client import ux
- 5d996a8: feat: download response with filename
- b26144c: fix(themes): remove variables from theme layer and move selection to default (base) theme
- Updated dependencies [46a55ae]
- Updated dependencies [b26144c]
  - @scalar/oas-utils@0.2.53
  - @scalar/themes@0.9.35
  - @scalar/components@0.12.50

## 2.1.17

### Patch Changes

- 8396e92: style: updates overall alignments
- 6279c59: feat (api-client): remove tabs on client.scalar.com
- 5581a28: fix: displays address bar placeholder according to active server

## 2.1.16

### Patch Changes

- c9a0d57: fix: sets focused selection color variables
- Updated dependencies [c9a0d57]
  - @scalar/use-codemirror@0.11.17

## 2.1.15

### Patch Changes

- Updated dependencies [9dc2ab7]
  - @scalar/types@0.0.13
  - @scalar/oas-utils@0.2.52
  - @scalar/themes@0.9.34
  - @scalar/components@0.12.50

## 2.1.14

### Patch Changes

- dea7b57: feat: adds open api document content import from command palette
- 008eca4: fix: Basic Auth should still include a colon after the username
- 9ba2c9f: fix: updates sidebar call to action position

## 2.1.13

### Patch Changes

- cebca7a: feat: updates request and response section order and naming
- 3b12248: fix: removed showing servers dropdown if empty
- a78b0a6: fix(api-client): don't error if there aren't any collections

## 2.1.12

### Patch Changes

- 3ded00b: fix(api-references): sync selected server state with api client modal
- aa39741: fix: header names can have leading/trailing whitespaces
- 07b5439: feat: enhances command palette navigation and style
- 513e0ad: feat: add import modal
- 4a78aae: fix: uppercase method on request send
- Updated dependencies [513e0ad]
- Updated dependencies [8f12149]
- Updated dependencies [5127a37]
- Updated dependencies [1026d81]
- Updated dependencies [983a5e4]
- Updated dependencies [aee166c]
- Updated dependencies [07b5439]
- Updated dependencies [ef49617]
  - @scalar/components@0.12.50
  - @scalar/types@0.0.12
  - @scalar/themes@0.9.33
  - @scalar/openapi-parser@0.8.5
  - @scalar/oas-utils@0.2.51
  - @scalar/use-codemirror@0.11.16

## 2.1.11

### Patch Changes

- 9b010e6: fix: force show servers when not in read only mode
- d8baf4e: feat: sets draft collection icon
- 8554e60: fix: add proper scalar version in ascii preview
- b4d1e1b: fix: remove stray hello world html
- d9ff13e: fix: updates empty sidebar content
- Updated dependencies [d8baf4e]
- Updated dependencies [9057781]
  - @scalar/components@0.12.49
  - @scalar/oas-utils@0.2.50
  - @scalar/use-codemirror@0.11.15

## 2.1.10

### Patch Changes

- 3647181: fix: skip empty value of query parameters
- e22c6ce: fix(api-client): add Content-Security-Policy to client.scalar.com

## 2.1.9

### Patch Changes

- 963b9cd: fix: removed global listeners to prevent random jumping bug
- cd8ba1c: feat: added setting of initial security schemes in the client
- 8b6633d: style: increases icon library usage stroke
- fb0d9a3: fix(api-client): don't teleport auth combobox to body
- Updated dependencies [cd8ba1c]
  - @scalar/oas-utils@0.2.49

## 2.1.8

### Patch Changes

- dc20180: feat(api-client): custom icons for collections
- 70857ed: fix: favors button over context menu in workspace dropdown
- Updated dependencies [f961940]
- Updated dependencies [f961940]
- Updated dependencies [dc20180]
- Updated dependencies [dc20180]
  - @scalar/types@0.0.11
  - @scalar/themes@0.9.32
  - @scalar/components@0.12.48
  - @scalar/oas-utils@0.2.48
  - @scalar/icons@0.1.0
  - @scalar/use-codemirror@0.11.14

## 2.1.7

### Patch Changes

- Updated dependencies [96c921c]
  - @scalar/openapi-parser@0.8.4
  - @scalar/oas-utils@0.2.47

## 2.1.6

### Patch Changes

- ca00556: fix: sidebar example and delete modal
- 2b8ce6c: feat: adds safe-parsing to the end of the migration
- 3c098f9: fix: teleports http methods dropdown
- 7beeef3: fix: modal dark mode bg
- d22523e: fix: add empty row on route change
- 40850bb: fix: enables sidebar item toggle on readonly
- c92cfa0: fix: code input content height
- cdb8f55: fix: address bar style and error typo
- Updated dependencies [2b8ce6c]
- Updated dependencies [9aa4562]
- Updated dependencies [7beeef3]
  - @scalar/object-utils@1.1.9
  - @scalar/oas-utils@0.2.47
  - @scalar/components@0.12.47
  - @scalar/themes@0.9.31
  - @scalar/use-codemirror@0.11.13
  - @scalar/types@0.0.10

## 2.1.5

### Patch Changes

- Updated dependencies [2b75354]
- Updated dependencies [437d54d]
  - @scalar/oas-utils@0.2.46

## 2.1.4

### Patch Changes

- b856652: chore: performance upgrades for api client sidebar
- 2bab01a: fix: request security requirement lookup
- Updated dependencies [b856652]
  - @scalar/components@0.12.46
  - @scalar/use-codemirror@0.11.12

## 2.1.3

### Patch Changes

- ddeaada: fix: adds path regex helper
- c1d39c5: fix: remove trailing slash in examples and in client for server
- 71278e1: fix(api-client): add back content header
- Updated dependencies [ddeaada]
- Updated dependencies [71278e1]
  - @scalar/oas-utils@0.2.45

## 2.1.2

### Patch Changes

- feb6960: fix: hide modal event typo

## 2.1.1

### Patch Changes

- 9351a90: avoid overwriting parameters in queries to support arrays as query params
- 9486091: fix: respect the proxy url config

## 2.1.0

### Minor Changes

- 88a4ec3: feat: releasing the api-client openapi compliant

### Patch Changes

- b8fdc19: feat: foldable code blocks
- 18c58af: fix: request header style
- dd06d00: fix(api-client): path only urls in send-request
- 7e5dfbb: feat: server variables from examples
- 641c1ec: style: new modal layout
- b8fdc19: feat: favors useDropdown hook over dropdown widget
- 9d88423: feat: added one way auth sync from references to client
- 86e1f46: feat(api-client): fix up and polish command palette
- 44f3300: feat(api-client): disable sidebar resizing on small screens
- 7df5770: fix: sidebar width and long request content handling
- 9269f5a: fix: environment and cookie mutators
- 73f728e: chore: cherrypicking refactor branch for object utils changes
- b8fdc19: feat: adds create request button in request sidebar
- a002783: fix: command palette consistency and styles
- c030024: feat(api-client): track active workspace in local storage
- 6fd83dc: style: sets context bar back to previous position
- Updated dependencies [b8fdc19]
- Updated dependencies [7e5dfbb]
- Updated dependencies [b8fdc19]
- Updated dependencies [9d88423]
- Updated dependencies [674922f]
- Updated dependencies [a08aa37]
- Updated dependencies [e15b021]
- Updated dependencies [73f728e]
- Updated dependencies [ee22a82]
- Updated dependencies [9cd23e3]
- Updated dependencies [6fd83dc]
- Updated dependencies [121bc7e]
  - @scalar/use-codemirror@0.11.11
  - @scalar/oas-utils@0.2.44
  - @scalar/openapi-parser@0.8.3
  - @scalar/components@0.12.45
  - @scalar/object-utils@1.1.8
  - @scalar/themes@0.9.30
  - @scalar/types@0.0.9

## 2.0.64

### Patch Changes

- e9253af: fix(api-client): scope api client draggable styles
- Updated dependencies [0fc3460]
- Updated dependencies [c577cde]
- Updated dependencies [e9253af]
- Updated dependencies [dc9aff2]
- Updated dependencies [6bb85a5]
- Updated dependencies [dc9aff2]
  - @scalar/components@0.12.44
  - @scalar/themes@0.9.29
  - @scalar/draggable@0.1.5
  - @scalar/openapi-types@0.1.1
  - @scalar/openapi-parser@0.8.2
  - @scalar/types@0.0.8
  - @scalar/oas-utils@0.2.43

## 2.0.63

### Patch Changes

- Updated dependencies [a07cfc8]
- Updated dependencies [5483fc3]
- Updated dependencies [1e41dfe]
- Updated dependencies [023ca15]
- Updated dependencies [85872b6]
- Updated dependencies [ad89ca3]
  - @scalar/types@0.0.7
  - @scalar/oas-utils@0.2.42
  - @scalar/components@0.12.43
  - @scalar/use-toasts@0.7.6

## 2.0.62

### Patch Changes

- Updated dependencies [5bd8337]
- Updated dependencies [f931ac7]
  - @scalar/openapi-parser@0.8.1
  - @scalar/oas-utils@0.2.41

## 2.0.61

### Patch Changes

- 4b52f29: fix: request sidebar item ellipsis menu events
- 294ba08: fix: variable removal breaking line
- e67f5a8: chore(api-client): removed axios dependency
- 044fd7d: fix: strip variable from functio name and cta
- 152c016: feat: add environment selector to addressbar
- Updated dependencies [b4f9f97]
- Updated dependencies [0afb293]
- Updated dependencies [b4f9f97]
- Updated dependencies [e67f5a8]
- Updated dependencies [b4f9f97]
- Updated dependencies [b4f9f97]
- Updated dependencies [b63be39]
- Updated dependencies [b231e7d]
- Updated dependencies [152c016]
- Updated dependencies [b4f9f97]
  - @scalar/openapi-parser@0.8.0
  - @scalar/oas-utils@0.2.40
  - @scalar/openapi-types@0.1.0
  - @scalar/components@0.12.42
  - @scalar/types@0.0.6

## 2.0.60

### Patch Changes

- c02202c: feat: main topnav context menu
- Updated dependencies [9e8d40d]
- Updated dependencies [80a3c46]
- Updated dependencies [c02202c]
  - @scalar/components@0.12.41
  - @scalar/themes@0.9.28
  - @scalar/oas-utils@0.2.39
  - @scalar/types@0.0.5

## 2.0.59

### Patch Changes

- bbe5b49: feat: update dropdown context menu icons
- Updated dependencies [bbe5b49]
  - @scalar/components@0.12.40

## 2.0.58

### Patch Changes

- 1c3de0e: fix(api-client): correctly initialize complex auth, fixes #2874
- 857380d: fix: command palette import collection
- ab8c4d7: feat: meta clik link request to topnav
- 8d615dc: fix: request sidebar item new tab event modifier
- 9bc0ae7: feat: command palette input required on submit
- 8f24069: feat(api-client): add loading state and cancellation for slow requests
- Updated dependencies [9bc0ae7]
- Updated dependencies [a792002]
- Updated dependencies [bb13304]
  - @scalar/components@0.12.39
  - @scalar/themes@0.9.27
  - @scalar/oas-utils@0.2.38
  - @scalar/types@0.0.4

## 2.0.57

### Patch Changes

- 6babe66: fix(components): show icon for ScalarTextField errors
- Updated dependencies [6babe66]
- Updated dependencies [abb8ddd]
  - @scalar/components@0.12.38
  - @scalar/themes@0.9.26
  - @scalar/oas-utils@0.2.37
  - @scalar/types@0.0.3

## 2.0.56

### Patch Changes

- af75550: feat: sidebar request search
- f9c88a9: fix: request table tooltip
- 5de17ce: fix: request params deletion
- f3b9adf: fix(api-client): force code mirror to scroll on overflow
- Updated dependencies [af75550]
- Updated dependencies [af75550]
  - @scalar/oas-utils@0.2.36
  - @scalar/components@0.12.37

## 2.0.55

### Patch Changes

- Updated dependencies [8bde837]
- Updated dependencies [910b1c2]
  - @scalar/components@0.12.36
  - @scalar/types@0.0.2
  - @scalar/oas-utils@0.2.35

## 2.0.54

### Patch Changes

- 2db9eb8: feat: topnav context menu
- Updated dependencies [7aa26fb]
- Updated dependencies [2db9eb8]
  - @scalar/components@0.12.35

## 2.0.53

### Patch Changes

- 78db8f5: feat: use new @scalar/types package
- Updated dependencies [78db8f5]
- Updated dependencies [7f11bc6]
  - @scalar/components@0.12.34
  - @scalar/oas-utils@0.2.34
  - @scalar/themes@0.9.25
  - @scalar/types@0.0.1

## 2.0.52

### Patch Changes

- cff5b1f: fix: close tab hotkey event prevent
- Updated dependencies [298f7c4]
- Updated dependencies [7bfee42]
  - @scalar/themes@0.9.24
  - @scalar/components@0.12.33
  - @scalar/oas-utils@0.2.33

## 2.0.51

### Patch Changes

- f2b4b3f: fix: request sidebar draft native context menu
- c386d64: fix: enable sidebar resizer on request page
- 5c877b8: fix: command palette navigation
- 1c81549: feat: topnav navigation hotkeys
- Updated dependencies [48693d7]
- Updated dependencies [1c81549]
  - @scalar/components@0.12.32
  - @scalar/oas-utils@0.2.32

## 2.0.50

### Patch Changes

- Updated dependencies [c220358]
- Updated dependencies [7ec175b]
  - @scalar/oas-utils@0.2.31

## 2.0.49

### Patch Changes

- 56be4fe: feat(api-client): added complex multi auth
- c450bb3: fix: scalar api ref use scalar-border-width
- 75a5a64: fix: sidebar title
- Updated dependencies [c450bb3]
  - @scalar/themes@0.9.23
  - @scalar/components@0.12.31
  - @scalar/oas-utils@0.2.30

## 2.0.48

### Patch Changes

- db96313: feat: workspace rename and deletion
- de9747c: fix: topnav alignment
- 8672a78: feat(api-client): moved command palette to the global key event bus
- 58e5912: fix: markdown fixes and intro card polish
- 6f7ab8d: feat: sidebar request transition and dragging capability
- 89ee9da: fix(api-client): move web hash router to a factory function
- 078ca72: feat: add topnav and addressbar hotkeys
- 520caff: fix: hot keys bus modifier
- 03e9bbb: Move to flatted for localstorage
- db96313: feat: set request sidebar item context menu
- Updated dependencies [8672a78]
- Updated dependencies [db96313]
- Updated dependencies [078ca72]
- Updated dependencies [6f107e1]
- Updated dependencies [520caff]
- Updated dependencies [03e9bbb]
- Updated dependencies [db96313]
  - @scalar/oas-utils@0.2.29
  - @scalar/components@0.12.30
  - @scalar/object-utils@1.1.7

## 2.0.47

### Patch Changes

- b00e50e: fix(api-client): improve api client responsiveness
- df7372f: feat: make side navigation a drag region
- 6f0632e: fix: sidebar list element action prop
- 3023afe: fix: sidenav endpoint ui
- 711ad03: fix: search modal data population
- 14ed31f: feat: group cookie by domain and path
- Updated dependencies [60e63d3]
- Updated dependencies [db92a85]
- Updated dependencies [dba83e4]
  - @scalar/themes@0.9.22
  - @scalar/use-toasts@0.7.5
  - @scalar/object-utils@1.1.6
  - @scalar/oas-utils@0.2.28
  - @scalar/components@0.12.29

## 2.0.46

### Patch Changes

- 2f6180a: fix: improve address bar styles
- Updated dependencies [17e06de]
  - @scalar/oas-utils@0.2.27

## 2.0.45

### Patch Changes

- ee80ee5: feat: allow renaming requests, cookies, environments
- f3fec79: fix: adds delete sidebar list element close event
- 2301345: fix: authentication select
- 57f5691: feat: set path variables from url
- faf3ed9: fix: style updates to client app
- a1c73a0: feat(api-client): improve client request loading and feedback
- Updated dependencies [faf3ed9]
  - @scalar/themes@0.9.21
  - @scalar/components@0.12.28
  - @scalar/oas-utils@0.2.26

## 2.0.44

### Patch Changes

- d65dbcb: fix: long content info button position
- 9cc6311: fix: add overload to servers as prop for create client app
- Updated dependencies [9cc6311]
  - @scalar/oas-utils@0.2.25

## 2.0.43

### Patch Changes

- 425dc83: fix(api-client): rebuild address bar history with grid
- 9afa9c5: feat: selected authentication pill ui
- 13b2f6d: fix: scalar icon chevron left update
- cd028bd: feat: added application/problem+json media type
- 554df83: feat: intercept requests to avoid CORS issues
- Updated dependencies [425dc83]
- Updated dependencies [13b2f6d]
  - @scalar/themes@0.9.20
  - @scalar/components@0.12.28
  - @scalar/oas-utils@0.2.24

## 2.0.42

### Patch Changes

- 1062ceb: fix: authentication counter and select style
- Updated dependencies [8eec1b7]
  - @scalar/oas-utils@0.2.23

## 2.0.41

### Patch Changes

- 09d07d1: fix: api client help and darkmode button, sidebar bugs, backgrounds, etc
- Updated dependencies [09d07d1]
- Updated dependencies [4e5de89]
  - @scalar/components@0.12.27
  - @scalar/use-codemirror@0.11.10

## 2.0.40

### Patch Changes

- 3a6effa: feat(api-client): add response previews
- dfa7434: feat(api-client): added drag and drop to the api client
- Updated dependencies [3a6effa]
- Updated dependencies [dfa7434]
  - @scalar/use-codemirror@0.11.9
  - @scalar/components@0.12.26
  - @scalar/themes@0.9.19
  - @scalar/draggable@0.1.4
  - @scalar/oas-utils@0.2.22

## 2.0.39

### Patch Changes

- 016ff7d: fix: dropdown add variable redirection
- e8cf2f5: fix: back to requests link
- c1ada84: feat(api-client): add the ability to delete and rename folders and collections
- 3031929: feat: command palette empty state
- c1ada84: fix: modal layout and size
- 808eafb: fix: word break in sidebar and word wrapping from ellipsis
- 7853b8d: feat: cookie removal
- Updated dependencies [c1ada84]
- Updated dependencies [c1ada84]
- Updated dependencies [e18029f]
  - @scalar/components@0.12.25
  - @scalar/themes@0.9.18
  - @scalar/oas-utils@0.2.21

## 2.0.38

### Patch Changes

- de25d01: feat(api-client): add the ability to delete and rename folders and collections
- Updated dependencies [de25d01]
  - @scalar/components@0.12.24
  - @scalar/themes@0.9.17
  - @scalar/oas-utils@0.2.20

## 2.0.37

### Patch Changes

- b21b419: feat(api-client): add submit to enter on command pallette
- 7b58f10: fix: add discord and github line icons
- 3d9e948: fix: add request on enter triggering in command palette
- Updated dependencies [7b58f10]
  - @scalar/components@0.12.23

## 2.0.36

### Patch Changes

- 276e506: fix: show alpha version copy

## 2.0.35

### Patch Changes

- bf2895e: feat(api-client): add multiple auth to api client
- 5d2825a: feat: add sidebar request menu
- Updated dependencies [bf2895e]
- Updated dependencies [5d2825a]
  - @scalar/components@0.12.22
  - @scalar/oas-utils@0.2.19

## 2.0.34

### Patch Changes

- c0cf4ac: fix: hide servers page
- 225e32a: feat: make the command palette amazing
- bb5909f: fix: tw-bg-base bug in gitbook and some app polish
- 9815191: fix: actually add workspace cookies to request
- a7ea3e3: fix: add default active collection to folder create command
- 9243580: feat: improve create request command
- 12bd5b8: fix: upload file in form-data with key
- Updated dependencies [9815191]
- Updated dependencies [e8fa353]
- Updated dependencies [869d255]
  - @scalar/oas-utils@0.2.18
  - @scalar/components@0.12.21

## 2.0.33

### Patch Changes

- ce3f630: fix: remove layout code from scalar-app class
- d88c403: fix(api-client): remove default proxy
- 0bea5b6: fix: window.matchMedia is not a function
- 2c61c21: feat: make the configuration for createApiClientApp and createApiClientModal optional
- 19a50de: feat: do not hide auth on write mode
- Updated dependencies [b2a662a]
- Updated dependencies [86014b5]
- Updated dependencies [a60c916]
  - @scalar/components@0.12.20

## 2.0.32

### Patch Changes

- 6123165: fix(api-client-react): loosen type for initialRequest

## 2.0.31

### Patch Changes

- 240a618: feat: allow multiple api-clients on single page
- Updated dependencies [240a618]
  - @scalar/object-utils@1.1.5

## 2.0.30

### Patch Changes

- b4199e9: fix: api client app clean up (font sizes, spacing, etc)
- Updated dependencies [a5f3a84]
- Updated dependencies [9a08f46]
  - @scalar/components@0.12.19
  - @scalar/themes@0.9.16
  - @scalar/oas-utils@0.2.17

## 2.0.29

### Patch Changes

- d5408e8: fix: subpages now have headers in the api client

## 2.0.28

### Patch Changes

- 23d498b: fix: scope search to active workspace
- 624696e: chore: update broken links in error messages
- 41341e9: fix: api client http method bg
- 5402338: fix: scalap app sidenav spacing
- 33f5a09: fix: revived the api-client-react package
- 9f4db12: fix: remove trailing whitespace codemirror env pill
- aee3783: fix: http method whitespace wrap
- 9ca5d7d: fix: add null check to scheme model
- d97bffd: fix: add powered by scalar for gitbook

## 2.0.27

### Patch Changes

- 19d8b6a: feat: animate sidebar icon
- c112f24: fix: remove ScalarCodeBlock that freezes browser in response preview
- 83fc241: fix: constantly adding empty header
- 2e1ef12: fix: set content type on body change and add proper header
- Updated dependencies [19d8b6a]
- Updated dependencies [c112f24]
  - @scalar/components@0.12.18
  - @scalar/use-codemirror@0.11.8

## 2.0.26

### Patch Changes

- 54f7654: fix: add local storage to client.scalar/com
- b0b3290: feat: create a default workspace if no OpenAPI document is passed to the modal
- 7e01b12: fix: only trigger codeinput change event if the value has changed
- b7211fb: fix: request history
- Updated dependencies [67aefbf]
- Updated dependencies [7761630]
  - @scalar/components@0.12.17
  - @scalar/oas-utils@0.2.16

## 2.0.25

### Patch Changes

- 591fe24: fix: clipped border radius in requests items
- 7f17fe4: feat: move command palette into the client app base
- 1dab515: feat: revamp address bar
- 4d76ff5: feat: add support for multiple workspaces
- e8cd161: feat: store workspace in local storage
- a431eb0: fix: table checkbox for required params on import
- ff59399: fix: api client spacing issues, and icon thickness
- ec47287: feat: made request examples functional in client
- 747e80e: fix: only flex addressbar codemirror
- 9d561b7: fix: make app topbar draggable
- Updated dependencies [1dab515]
- Updated dependencies [5e060b1]
- Updated dependencies [ff59399]
- Updated dependencies [694c1d8]
  - @scalar/oas-utils@0.2.15
  - @scalar/themes@0.9.15
  - @scalar/components@0.12.16
  - @scalar/use-codemirror@0.11.7
  - @scalar/object-utils@1.1.4
  - @scalar/use-toasts@0.7.4
  - @scalar/use-tooltip@1.0.2

## 2.0.24

### Patch Changes

- 7076725: feat(components): add outline icons
- 1e72b03: fix(components): polish history icon
- cbe984b: fix: adjust command palette icon thickness
- Updated dependencies [7076725]
- Updated dependencies [1e72b03]
- Updated dependencies [dd2a42e]
  - @scalar/components@0.12.15

## 2.0.23

### Patch Changes

- 3928ac3: feat: add routing portion for multiple workspaces
- Updated dependencies [96e7106]
  - @scalar/themes@0.9.14
  - @scalar/components@0.12.14
  - @scalar/oas-utils@0.2.14

## 2.0.22

### Patch Changes

- 45b956f: fix: only add body data if body data is not null

## 2.0.21

### Patch Changes

- d48e4ac: fix: update active body when content type changes

## 2.0.20

### Patch Changes

- Updated dependencies [e1aa4fc]
  - @scalar/components@0.12.14

## 2.0.19

### Patch Changes

- a0bb23a: fix: api client codemirror bg color

## 2.0.18

### Patch Changes

- 8654323: fix: scopes checkbox

## 2.0.17

### Patch Changes

- 91b97fa: fix: input checked by default on required item
- 05bc858: feat: display select for boolean type
- 05bc858: fix: data table input enum select back

## 2.0.16

### Patch Changes

- a5b295c: fix: address bar scrollbar shown offset
- bff602a: fix: client sidebar item width + some icon issues
- 6f4d20d: fix: update client icon weights
- 1ba4267: fix: top nav path error
- 58da2c6: feat: new createApiClientApp method
- 9e3348a: feat: use code input in request table
- fe16789: fix: make env variable dropdown readonly
- fc096b6: refactor!: rename `createScalarApiClient` to `createApiClientModal`
- ebdc9cf: feat: new command palette
- Updated dependencies [e285a6b]
- Updated dependencies [bff602a]
- Updated dependencies [6f4d20d]
- Updated dependencies [2f10a39]
- Updated dependencies [9e3348a]
- Updated dependencies [2f10a39]
  - @scalar/components@0.12.13
  - @scalar/use-codemirror@0.11.6

## 2.0.15

### Patch Changes

- f86a242: fix: data table input fixtures
- Updated dependencies [f86a242]
  - @scalar/components@0.12.12

## 2.0.14

### Patch Changes

- 6b32eee: feat: enable lint on request body
- 1a675be: feat: add empty state + drafts collection
- a1d59de: fix: update sidebar list element modal style
- Updated dependencies [e649da6]
- Updated dependencies [6b32eee]
- Updated dependencies [1a675be]
- Updated dependencies [a1d59de]
  - @scalar/components@0.12.11
  - @scalar/use-codemirror@0.11.5
  - @scalar/oas-utils@0.2.13

## 2.0.13

### Patch Changes

- 618285e: feat: add localStorage syncing to client app
- Updated dependencies [618285e]
  - @scalar/object-utils@1.1.4
  - @scalar/oas-utils@0.2.12
  - @scalar/themes@0.9.13
  - @scalar/components@0.12.10

## 2.0.12

### Patch Changes

- 0a33194: fix: flatten default array value

## 2.0.11

### Patch Changes

- e8a7f82: fix: favor nowrap over pre for table tooltip value
- c16413d: feat: display sidebar by default if not read-only
- b9a7a4e: feat: hide client modal on esc
  - @scalar/components@0.12.10
  - @scalar/oas-utils@0.2.11
  - @scalar/object-utils@1.1.3
  - @scalar/themes@0.9.12
  - @scalar/use-codemirror@0.11.4
  - @scalar/use-toasts@0.7.4
  - @scalar/use-tooltip@1.0.2

## 2.0.10

### Patch Changes

- b65d1fa: fix: the client search modal was missing icons, methods, and had a racecondition
- b655c7a: fix: indent request sidebar highlight properly in readonly mode

## 2.0.9

### Patch Changes

- 1bb94c7: fix: set created cookie page active
- f1b5390: fix: remove tailwind preflight from api client app
- ad7fd7e: feat: add min max value to request params
- Updated dependencies [ad7fd7e]
- Updated dependencies [f1b5390]
  - @scalar/oas-utils@0.2.11
  - @scalar/components@0.12.10
  - @scalar/themes@0.9.12

## 2.0.8

### Patch Changes

- ba3f5cb: feat: address bar history item infos
- 0b6e3aa: fix: address bar history item infos
- d58841b: feat: request table tooltip component
- Updated dependencies [d58841b]
- Updated dependencies [d58841b]
  - @scalar/oas-utils@0.2.10
  - @scalar/components@0.12.9

## 2.0.7

### Patch Changes

- f2e3b0e: fix(#2351): global css import bug
- Updated dependencies [4250fe2]
  - @scalar/themes@0.9.11
  - @scalar/components@0.12.8

## 2.0.6

### Patch Changes

- 4385ae2: fix: add missing dependencies
- 632d6f7: fix: add cookie handler and schema
- a5aedf5: feat: lint workspace sidenav icons
- a5aedf5: feat: add server icon
- d6a2a4d: feat: api client data table input enum select component
- cd5d1a4: fix: made adding of scalar classes to headless more robust
- Updated dependencies [d6a2a4d]
- Updated dependencies [04ca40b]
- Updated dependencies [632d6f7]
- Updated dependencies [a5aedf5]
- Updated dependencies [a5aedf5]
- Updated dependencies [cd5d1a4]
  - @scalar/oas-utils@0.2.9
  - @scalar/object-utils@1.1.3
  - @scalar/components@0.12.8

## 2.0.5

### Patch Changes

- 6709507: fix: api client missing scalar ui root style
- 8f06fcd: fix: api client required after content out of tailwind
- 8f06fcd: fix: prevent api client path param key update
- cdfb8c5: feat: focus visible outline style
  - @scalar/components@0.12.7

## 2.0.4

### Patch Changes

- Updated dependencies [a01df62]
  - @scalar/oas-utils@0.2.8

## 2.0.3

### Patch Changes

- 9f208d5: fix: only send query params with a value

## 2.0.2

### Patch Changes

- 209a7e1: fix: default proxy for client app and revert to scalar galaxy
- 429e928: feat: watch spec and update
- 3ba80b9: fix: move to pure css solution for client modal no more headless ui

## 2.0.1

### Patch Changes

- ec52346: fix: request no longer being sent multiple times
- ded1303: fix: only send enabled parameters
- 6aae9fe: fix: select the correct auth when opening the client
- Updated dependencies [14e71cd]
  - @scalar/components@0.12.7
  - @scalar/oas-utils@0.2.7
  - @scalar/object-utils@1.1.2
  - @scalar/use-toasts@0.7.4
  - @scalar/use-tooltip@1.0.2

## 2.0.0

### Major Changes

- bd67d8f: feat: switch to the brand new client app

### Patch Changes

- Updated dependencies [7f4d22e]
  - @scalar/oas-utils@0.2.7

## 1.3.21

### Patch Changes

- Updated dependencies [c533665]
- Updated dependencies [3b83b82]
  - @scalar/components@0.12.6
  - @scalar/themes@0.9.9

## 1.3.20

### Patch Changes

- cefe804: refactor: server feature
- Updated dependencies [e1af8ed]
- Updated dependencies [4861362]
- Updated dependencies [cefe804]
- Updated dependencies [fec6f8e]
- Updated dependencies [d0aec62]
  - @scalar/use-tooltip@1.0.2
  - @scalar/components@0.12.5
  - @scalar/oas-utils@0.2.6

## 1.3.19

### Patch Changes

- 326bd3d: fix: URL is not encoded when sent to the proxy
- 94e68ab: chore: upgrade typescript to 5.5
- Updated dependencies [a298195]
- Updated dependencies [326bd3d]
- Updated dependencies [94e68ab]
  - @scalar/oas-utils@0.2.5
  - @scalar/components@0.12.4
  - @scalar/themes@0.9.8
  - @scalar/use-codemirror@0.11.4
  - @scalar/use-toasts@0.7.4
  - @scalar/use-tooltip@1.0.1

## 1.3.18

### Patch Changes

- 06471ed: fix: display enum select in api reference
- Updated dependencies [132acd4]
- Updated dependencies [3b53db5]
- Updated dependencies [b981770]
- Updated dependencies [fd18932]
- Updated dependencies [06471ed]
  - @scalar/components@0.12.3
  - @scalar/themes@0.9.7
  - @scalar/use-codemirror@0.11.3
  - @scalar/use-toasts@0.7.3

## 1.3.17

### Patch Changes

- Updated dependencies [e88a2c2]
- Updated dependencies [65f7bf5]
  - @scalar/themes@0.9.6
  - @scalar/components@0.12.2

## 1.3.16

### Patch Changes

- Updated dependencies [c20c7d0]
- Updated dependencies [c20c7d0]
  - @scalar/components@0.12.1
  - @scalar/oas-utils@0.2.4

## 1.3.15

### Patch Changes

- Updated dependencies [e4419ce]
- Updated dependencies [e5ac3e1]
- Updated dependencies [f2c1019]
- Updated dependencies [fd0c93d]
- Updated dependencies [7b87b8c]
- Updated dependencies [512c815]
  - @scalar/components@0.12.0
  - @scalar/use-tooltip@1.0.0

## 1.3.14

### Patch Changes

- b1fd179: fix: remove reset style wrapper from security schemes

## 1.3.13

### Patch Changes

- 88ae0a5: fix: add api client right to scope
- 5e92eab: feat(#doc-1996): themes css exports
- Updated dependencies [5e92eab]
  - @scalar/components@0.11.6
  - @scalar/themes@0.9.5

## 1.3.12

### Patch Changes

- 362d47a: chore: less @ts-ignore comments
- Updated dependencies [362d47a]
- Updated dependencies [2ca1af2]
- Updated dependencies [627e0e5]
  - @scalar/oas-utils@0.2.3
  - @scalar/themes@0.9.4
  - @scalar/components@0.11.5

## 1.3.11

### Patch Changes

- Updated dependencies [3d6ca80]
- Updated dependencies [0fae180]
  - @scalar/components@0.11.4
  - @scalar/themes@0.9.3

## 1.3.10

### Patch Changes

- db89d01: fix: scoping request component styles

## 1.3.9

### Patch Changes

- Updated dependencies [7dbb241]
  - @scalar/components@0.11.3

## 1.3.8

### Patch Changes

- a2cb3c3: Migrate away from unintended peer dependencies
- Updated dependencies [a2cb3c3]
  - @scalar/use-codemirror@0.11.2
  - @scalar/use-tooltip@0.7.3
  - @scalar/components@0.11.2
  - @scalar/use-toasts@0.7.2
  - @scalar/oas-utils@0.2.2
  - @scalar/themes@0.9.2

## 1.3.7

### Patch Changes

- Updated dependencies [c65697c]
  - @scalar/use-tooltip@0.7.2

## 1.3.6

### Patch Changes

- e0fc110: chore: patch bump all package
- f0acc89: chore: upgrade to new @scalar/openapi-parser version
- Updated dependencies [e0fc110]
- Updated dependencies [f0acc89]
  - @scalar/components@0.11.1
  - @scalar/oas-utils@0.2.1
  - @scalar/themes@0.9.1
  - @scalar/use-codemirror@0.11.1
  - @scalar/use-toasts@0.7.1
  - @scalar/use-tooltip@0.7.1

## 2.0.0

### Minor Changes

- 7f8ef74: chore: remove aliasing

### Patch Changes

- 1de697b: fix: URL is not encoded when sent to the proxy
- 689677a: fix: auto importing css backup
- 326dcfb: chore: remove @scalar/use-modal package
- 8494349: Migrate to highlightjs based syntax highlighting
- b38c7ed: Update build configs to a standardized format
- 6fbb57e: feat: release all the packages
- e63b12d: feat: better error output for failed requests
- Updated dependencies [190bcb6]
- Updated dependencies [7f8ef74]
- Updated dependencies [f82a767]
- Updated dependencies [326dcfb]
- Updated dependencies [96347a1]
- Updated dependencies [8494349]
- Updated dependencies [b38c7ed]
- Updated dependencies [6fbb57e]
- Updated dependencies [94084bf]
- Updated dependencies [c5760b9]
  - @scalar/components@0.11.0
  - @scalar/use-codemirror@0.11.0
  - @scalar/use-tooltip@0.7.0
  - @scalar/use-toasts@0.7.0
  - @scalar/oas-utils@0.2.0
  - @scalar/themes@0.9.0

## 1.3.4

### Patch Changes

- Updated dependencies [55e01dd]
  - @scalar/themes@0.8.2
  - @scalar/components@0.10.1

## 1.3.3

### Patch Changes

- Updated dependencies [db7864a]
  - @scalar/themes@0.8.1
  - @scalar/components@0.10.1

## 1.3.2

### Patch Changes

- Updated dependencies [c951512]
- Updated dependencies [961690d]
  - @scalar/oas-utils@0.1.17
  - @scalar/components@0.10.1

## 1.3.1

### Patch Changes

- 195ca18: fix: align show hide icons with icon standards
- Updated dependencies [83bfad8]
- Updated dependencies [34eba38]
- Updated dependencies [843218d]
- Updated dependencies [195ca18]
  - @scalar/components@0.10.0

## 1.3.0

### Minor Changes

- 7d3bc16: feat: css files must be explicitly imported, check the docs
- 7d3bc16: BREAKING CHANGE: css must now be explicitly imported, see docs for more details

### Patch Changes

- Updated dependencies [7d3bc16]
- Updated dependencies [7d3bc16]
- Updated dependencies [a839889]
  - @scalar/components@0.9.0
  - @scalar/themes@0.8.0

## 1.2.39

### Patch Changes

- Updated dependencies [18ecd33]
- Updated dependencies [26e2392]
  - @scalar/components@0.8.0

## 1.2.38

### Patch Changes

- cc5402c: feat: OpenAuth 2.0 password grant
- Updated dependencies [cc5402c]
- Updated dependencies [cc5402c]
  - @scalar/use-toasts@0.6.7
  - @scalar/oas-utils@0.1.16
  - @scalar/components@0.7.15

## 1.2.37

### Patch Changes

- d60cc10: fix: api client body on delete request

## 1.2.36

### Patch Changes

- da7cdb6: fix: authentication card form style

## 1.2.35

### Patch Changes

- Updated dependencies [f472998]
  - @scalar/oas-utils@0.1.15
  - @scalar/components@0.7.14

## 1.2.34

### Patch Changes

- be75488: fix: update password show hide icon
- Updated dependencies [be75488]
  - @scalar/components@0.7.13

## 1.2.33

### Patch Changes

- cfba428: fix: always return html vs error rendering

## 1.2.32

### Patch Changes

- Updated dependencies [7205137]
- Updated dependencies [d369ac4]
- Updated dependencies [50480c7]
  - @scalar/oas-utils@0.1.14
  - @scalar/components@0.7.12

## 1.2.31

### Patch Changes

- 5aa656f: feat: [BREAKING CHANGE] use new HTTP proxy (https://github.com/scalar/scalar/pull/1703)
- Updated dependencies [5aa656f]
  - @scalar/oas-utils@0.1.13
  - @scalar/components@0.7.11

## 1.2.30

### Patch Changes

- 504ff7a: fix: request / response active states margins, etc
- 61b8ddc: fix: doesn’t render preview for mimetype variations like application/foobar+json
- Updated dependencies [dfe51b1]
- Updated dependencies [61b8ddc]
- Updated dependencies [165b901]
- Updated dependencies [925572f]
  - @scalar/components@0.7.10
  - @scalar/oas-utils@0.1.12

## 1.2.29

### Patch Changes

- Updated dependencies [69a617c]
  - @scalar/themes@0.7.11
  - @scalar/components@0.7.9

## 1.2.28

### Patch Changes

- 1ce9661: feat: intro cards redesign
- Updated dependencies [1ce9661]
  - @scalar/themes@0.7.10
  - @scalar/components@0.7.9

## 1.2.27

### Patch Changes

- 7ba851f: feature: client ui updates
- Updated dependencies [7ba851f]
  - @scalar/use-codemirror@0.10.5

## 1.2.26

### Patch Changes

- Updated dependencies [e3a72bb]
  - @scalar/components@0.7.9

## 1.2.25

### Patch Changes

- 79e3caa: chore: replace petstore example with galaxy example
- e022ee6: fix: color single security scheme
- Updated dependencies [79e3caa]
  - @scalar/components@0.7.8

## 1.2.24

### Patch Changes

- 624604e: chore: move http status codes to oas-utils
- Updated dependencies [624604e]
- Updated dependencies [624604e]
  - @scalar/oas-utils@0.1.11
  - @scalar/components@0.7.7

## 1.2.23

### Patch Changes

- 3a4ff3c: fix: required api client bg

## 1.2.22

### Patch Changes

- a13f853: feat: update api client ui
- Updated dependencies [a13f853]
  - @scalar/use-codemirror@0.10.4

## 1.2.21

### Patch Changes

- f871c28: fix: api client address bar url
- 3748dc5: feat: api client toggle sidebar hotkey

## 1.2.20

### Patch Changes

- 0640c52: feat: api client address bar style update
- 84399ab: feat: add api client response empty state
- a80345a: fix: vertical alignment of client response empty state
- Updated dependencies [6e67167]
  - @scalar/components@0.7.6

## 1.2.19

### Patch Changes

- fa2cc5b: fix: history toggle location
- Updated dependencies [836869b]
  - @scalar/components@0.7.5

## 1.2.18

### Patch Changes

- 26d9146: feat: improved api client modal
- Updated dependencies [26d9146]
  - @scalar/components@0.7.4

## 1.2.17

### Patch Changes

- d649691: fix: request body display

## 1.2.16

### Patch Changes

- 45dc04b: fix: can’t release packages
- Updated dependencies [45dc04b]
  - @scalar/use-codemirror@0.10.3
  - @scalar/use-tooltip@0.6.2
  - @scalar/components@0.7.3
  - @scalar/oas-utils@0.1.10
  - @scalar/use-modal@0.3.3
  - @scalar/themes@0.7.9

## 1.2.15

### Patch Changes

- 05e2e27: chore: add provenance statement
- Updated dependencies [05e2e27]
  - @scalar/components@0.7.2
  - @scalar/oas-utils@0.1.9
  - @scalar/themes@0.7.8
  - @scalar/use-codemirror@0.10.2
  - @scalar/use-modal@0.3.2
  - @scalar/use-tooltip@0.6.1

## 1.2.14

### Patch Changes

- Updated dependencies [085a0c2]
- Updated dependencies [fa10d45]
  - @scalar/oas-utils@0.1.8
  - @scalar/components@0.7.1

## 1.2.13

### Patch Changes

- c68939c: feat: allow toggling of password fields
- 07211ad: chore: added new lint rule for type importing for better perf
- Updated dependencies [c68939c]
- Updated dependencies [07211ad]
- Updated dependencies [d4fa19b]
- Updated dependencies [1c18f77]
- Updated dependencies [830b3c8]
  - @scalar/components@0.7.0
  - @scalar/oas-utils@0.1.7
  - @scalar/use-modal@0.3.1
  - @scalar/themes@0.7.7

## 1.2.12

### Patch Changes

- c6e4385: fix: passing a prefilled token as null throws an exception

## 1.2.11

### Patch Changes

- Updated dependencies [2706d57]
  - @scalar/components@0.6.1

## 1.2.10

### Patch Changes

- Updated dependencies [fc2c90f]
  - @scalar/components@0.6.0

## 1.2.9

### Patch Changes

- Updated dependencies [0a77380]
  - @scalar/themes@0.7.6
  - @scalar/components@0.5.5

## 1.2.8

### Patch Changes

- Updated dependencies [2700c5c]
  - @scalar/components@0.5.5
  - @scalar/themes@0.7.5

## 1.2.7

### Patch Changes

- Updated dependencies [79485ff]
- Updated dependencies [92b5b2a]
  - @scalar/components@0.5.4

## 1.2.6

### Patch Changes

- Updated dependencies [86d1363]
- Updated dependencies [bc3f3af]
  - @scalar/themes@0.7.4
  - @scalar/components@0.5.3

## 1.2.5

### Patch Changes

- Updated dependencies [e8ef57e]
- Updated dependencies [1353154]
  - @scalar/components@0.5.2

## 1.2.4

### Patch Changes

- Updated dependencies [4d31b19]
  - @scalar/themes@0.7.3
  - @scalar/components@0.5.1

## 1.2.3

### Patch Changes

- Updated dependencies [96ded16]
- Updated dependencies [24662c3]
  - @scalar/use-codemirror@0.10.1
  - @scalar/components@0.5.1

## 1.2.2

### Patch Changes

- Updated dependencies [85a0074]
  - @scalar/themes@0.7.2
  - @scalar/components@0.5.0

## 1.2.1

### Patch Changes

- d77acdd: fix: missing css font
- Updated dependencies [d77acdd]
  - @scalar/themes@0.7.1
  - @scalar/components@0.5.0

## 1.2.0

### Minor Changes

- 0e64a36: refactor: rename all --theme-_ variables to --scalar-_

### Patch Changes

- 22f2858: chore: ran syncpack to update packages
- Updated dependencies [22f2858]
- Updated dependencies [0e64a36]
  - @scalar/use-codemirror@0.10.0
  - @scalar/use-tooltip@0.6.0
  - @scalar/components@0.5.0
  - @scalar/oas-utils@0.1.6
  - @scalar/use-modal@0.3.0
  - @scalar/themes@0.7.0

## 1.1.16

### Patch Changes

- Updated dependencies [e6d1b81]
- Updated dependencies [3ba9774]
- Updated dependencies [3ba9774]
  - @scalar/use-modal@0.2.10
  - @scalar/oas-utils@0.1.5
  - @scalar/components@0.4.11

## 1.1.15

### Patch Changes

- Updated dependencies [24b3c2a]
  - @scalar/oas-utils@0.1.4

## 1.1.14

### Patch Changes

- Updated dependencies [95bac72]
  - @scalar/components@0.4.10

## 1.1.13

### Patch Changes

- b0b757d: feat: improve API Client request parameter tables

## 1.1.12

### Patch Changes

- c14568f: feat: add custom security option
- Updated dependencies [c14568f]
  - @scalar/components@0.4.9
  - @scalar/oas-utils@0.1.3

## 1.1.11

### Patch Changes

- 8b0691b: feat: added future support for SSR server state hydration
- Updated dependencies [8b0691b]
  - @scalar/oas-utils@0.1.2

## 1.1.10

### Patch Changes

- 999dfc9: feat: add authentication UI to the API client

## 1.1.9

### Patch Changes

- Updated dependencies [d70bda7]
  - @scalar/themes@0.6.7
  - @scalar/components@0.4.8

## 1.1.8

### Patch Changes

- 43421a6: fix: only lowercase hostname
- ae193a8: feat: sidebar border indents + theme polish
- Updated dependencies [5b83e30]
- Updated dependencies [6889ad9]
- Updated dependencies [ae193a8]
  - @scalar/themes@0.6.6
  - @scalar/use-codemirror@0.9.1
  - @scalar/components@0.4.8

## 1.1.7

### Patch Changes

- Updated dependencies [f861efa]
  - @scalar/components@0.4.7

## 1.1.6

### Patch Changes

- Updated dependencies [7d0092e]
  - @scalar/components@0.4.6

## 1.1.5

### Patch Changes

- 06c57ca: fix: buffer not available in browser environments

## 1.1.4

### Patch Changes

- Updated dependencies [42b385b]
  - @scalar/components@0.4.5

## 1.1.3

### Patch Changes

- Updated dependencies [0c5e22c]
  - @scalar/themes@0.6.5
  - @scalar/components@0.4.4

## 1.1.2

### Patch Changes

- c7241e8: fix: address bar changes do not have an effect on the actual request

## 1.1.1

### Patch Changes

- 61a97e2: feat: make api client url editable

## 1.1.0

### Minor Changes

- 31aae5e: chore: moved shared types and methods into oas-utils

### Patch Changes

- Updated dependencies [31aae5e]
  - @scalar/oas-utils@0.1.1

## 1.0.3

### Patch Changes

- e2491c1: chore: update axios

## 1.0.2

### Patch Changes

- Updated dependencies [68cda2b]
  - @scalar/themes@0.6.4
  - @scalar/components@0.4.4

## 1.0.1

### Patch Changes

- Updated dependencies [bbbba1f]
- Updated dependencies [897990b]
  - @scalar/components@0.4.4
  - @scalar/themes@0.6.3

## 1.0.0

### Minor Changes

- 7fb8273: Migrate to @scalar/openapi-parser

### Patch Changes

- 6036d25: fix: allow application/vnd.api+json return type
- Updated dependencies [7fb8273]
  - @scalar/use-codemirror@0.9.0
  - @scalar/oas-utils@0.1.0

## 0.12.18

### Patch Changes

- cecf074: Migrate to oas utils for basic spec operations
- Updated dependencies [cecf074]
  - @scalar/use-codemirror@0.8.10
  - @scalar/oas-utils@0.0.4

## 0.12.17

### Patch Changes

- ddc9b17: fix: re-added moving the components css into js so importing the css file is no longer needed
- 775646a: fix: removed extra copy of vue from themes and some dependencies
- ef3a015: chore: update to typescript 5.4
- Updated dependencies [ddc9b17]
- Updated dependencies [775646a]
- Updated dependencies [ef3a015]
  - @scalar/components@0.4.3
  - @scalar/themes@0.6.2
  - @scalar/use-codemirror@0.8.9
  - @scalar/use-modal@0.2.9

## 0.12.16

### Patch Changes

- Updated dependencies [4ef178f]
  - @scalar/themes@0.6.1
  - @scalar/components@0.4.2

## 0.12.15

### Patch Changes

- Updated dependencies [ad2b95a]
- Updated dependencies [ad2b95a]
  - @scalar/themes@0.6.0
  - @scalar/components@0.4.2

## 0.12.14

### Patch Changes

- 3b672cc: fix: revert css changes to components lib
- Updated dependencies [3b672cc]
  - @scalar/components@0.4.2

## 0.12.13

### Patch Changes

- c5e8b13: feat: hide secret credentials
- Updated dependencies [c5e8b13]
  - @scalar/components@0.4.1

## 0.12.12

### Patch Changes

- 5bc2ebf: Add syntax highlighting back to codemirror
- Updated dependencies [407a3af]
- Updated dependencies [5bc2ebf]
  - @scalar/components@0.4.0
  - @scalar/use-codemirror@0.8.8

## 0.12.11

### Patch Changes

- d16d07f: style: added scrollbar and border to api-client

## 0.12.10

### Patch Changes

- Updated dependencies [5a94530]
  - @scalar/use-codemirror@0.8.7

## 0.12.9

### Patch Changes

- 6857b8d: fix: api client syntax highlighting
- Updated dependencies [6857b8d]
  - @scalar/components@0.3.0

## 0.12.8

### Patch Changes

- Updated dependencies [51acf2c]
  - @scalar/themes@0.5.10
  - @scalar/components@0.2.6

## 0.12.7

### Patch Changes

- Updated dependencies [c103201]
- Updated dependencies [d2728c8]
  - @scalar/components@0.2.6
  - @scalar/themes@0.5.9

## 0.12.6

### Patch Changes

- b9523b7: fix: allow application/problem+json return type

## 0.12.5

### Patch Changes

- 1669b27: chore: update dependencies
- 7ea052b: chore: remove some languages from CodeMirror
- Updated dependencies [1669b27]
- Updated dependencies [7ea052b]
  - @scalar/use-codemirror@0.8.6
  - @scalar/components@0.2.5
  - @scalar/use-modal@0.2.8
  - @scalar/themes@0.5.8

## 0.12.4

### Patch Changes

- c6b95ca: chore: upgrade from Vite 4 to Vite 5
- Updated dependencies [c6b95ca]
  - @scalar/use-codemirror@0.8.5
  - @scalar/components@0.2.4
  - @scalar/use-modal@0.2.7
  - @scalar/themes@0.5.7

## 0.12.3

### Patch Changes

- Updated dependencies [3ade0d1]
  - @scalar/use-modal@0.2.6

## 0.12.2

### Patch Changes

- c23b2cb: fix: set max height on request body codemirror
- 5b3f7d9: fix: updated scroll region padding to for chrome update
- Updated dependencies [5b3f7d9]
  - @scalar/use-modal@0.2.5
  - @scalar/themes@0.5.6
  - @scalar/components@0.2.3

## 0.12.1

### Patch Changes

- 4fb6af9: chore: remove use-keyboard-event package

## 0.12.0

### Minor Changes

- e0faebb: feat: add show more button to request variables and path params

### Patch Changes

- 92a8b9f: chore: update dependencies
- abfb086: chore: remove unused CodeMirror CSS
- 76f4041: chore: remove unused code
- Updated dependencies [92a8b9f]
- Updated dependencies [abfb086]
  - @scalar/use-keyboard-event@0.5.9
  - @scalar/use-codemirror@0.8.4
  - @scalar/components@0.2.3
  - @scalar/use-modal@0.2.4
  - @scalar/themes@0.5.5

## 0.11.5

### Patch Changes

- cb8139e7: fix: rollback api client proxy and request changes

## 0.11.4

### Patch Changes

- 037029cc: fix: parse axios error responses as blobs

## 0.11.3

### Patch Changes

- Updated dependencies [d4fff0de]
  - @scalar/use-codemirror@0.8.3

## 0.11.2

### Patch Changes

- f8650e4f: Bundle codemirror and update packages
- Updated dependencies [f8650e4f]
  - @scalar/use-codemirror@0.8.2

## 0.11.1

### Patch Changes

- Updated dependencies [b1f3cb49]
  - @scalar/use-codemirror@0.8.1

## 0.11.0

### Minor Changes

- 26340b12: feat: update components to support all basic http request methods

### Patch Changes

- Updated dependencies [612431b4]
  - @scalar/use-codemirror@0.8.0

## 0.10.2

### Patch Changes

- 6da73708: feat: handle application/zip responses in the API client
- Updated dependencies [6da73708]
  - @scalar/use-codemirror@0.7.22

## 0.10.1

### Patch Changes

- Updated dependencies [cd7afa70]
  - @scalar/use-codemirror@0.7.21

## 0.10.0

### Minor Changes

- dccb83ab: feat: add default state for api client collapsed panels

## 0.9.4

### Patch Changes

- Updated dependencies [3d712d74]
  - @scalar/use-codemirror@0.7.20

## 0.9.3

### Patch Changes

- Updated dependencies [75e1cdf8]
  - @scalar/use-keyboard-event@0.5.8

## 0.9.2

### Patch Changes

- 81543f42: chore: add support for Node 18
- Updated dependencies [81543f42]
  - @scalar/use-keyboard-event@0.5.7
  - @scalar/use-codemirror@0.7.19
  - @scalar/use-modal@0.2.3
  - @scalar/themes@0.5.4

## 0.9.1

### Patch Changes

- 479a7e3e: fix: bumped @codemirror/state dependency
- Updated dependencies [479a7e3e]
  - @scalar/use-codemirror@0.7.18

## 0.9.0

### Minor Changes

- 5ca138ee: - Removed activeBreadCrumb from api-client as its available in the slot
  - Centralized navigation logic
  - use proper anchor navigation instead of scrollIntoView, it will also be saved to history
  - scrolling down will open the next section

### Patch Changes

- b8ce7fd5: feat: show body and formData parameters (Swagger 2.0)
- Updated dependencies [5ca138ee]
  - @scalar/use-modal@0.2.2
  - @scalar/themes@0.5.3

## 0.8.10

### Patch Changes

- dae1010a: chore: update axios to 1.6.5

## 0.8.9

### Patch Changes

- 6d777194: feat: release themes
- Updated dependencies [6d777194]
  - @scalar/themes@0.5.2

## 0.8.8

### Patch Changes

- 0e0f34b3: fix: cleanup safari bugs

## 0.8.7

### Patch Changes

- c171c9d9: fix: request body doesn’t reset on navigating to a request without a body
- Updated dependencies [c171c9d9]
  - @scalar/use-codemirror@0.7.17

## 0.8.6

### Patch Changes

- 06f800cc: fix: regression ui bugs

## 0.8.5

### Patch Changes

- bf29f8df: fix: add text/plain support

## 0.8.4

### Patch Changes

- 0f9791b7: fix: add null check to cookies and proper withCredentials set on cookie addition

## 0.8.3

### Patch Changes

- 5d6b539b: feat: toggle parameters to include/exclude them in/from the request
- a1319e8b: Switched internal component library to use ScalarComponents instead
- Updated dependencies [a1319e8b]
  - @scalar/use-codemirror@0.7.16
  - @scalar/use-modal@0.2.1
  - @scalar/themes@0.5.1

## 0.8.2

### Patch Changes

- edb02e76: fix: windows select menu not updating on prefers color scheme

## 0.8.1

### Patch Changes

- f87910d: feat: prefill path, header, cookie, query parameters from the spec

## 0.8.0

### Minor Changes

- f38bb61: chore: remove swagger editor tabs

### Patch Changes

- 349589a: feat: expose spec content updates
- Updated dependencies [f38bb61]
  - @scalar/use-modal@0.2.0
  - @scalar/themes@0.5.0

## 0.7.37

### Patch Changes

- b65840b: refactor: keep track of the collapsed sidebar items in @scalar/api-reference

## 0.7.36

### Patch Changes

- bc23e62: fix: don’t trim / from the path, if it’s the only character

## 0.7.35

### Patch Changes

- fdaabfe: fix: surface proxy internal service errors
- fdaabfe: fix: catch axios errors and show them in the response

## 0.7.34

### Patch Changes

- 35dffe4: chore: include @scalar dependencies in the bundle
- Updated dependencies [35dffe4]
  - @scalar/use-keyboard-event@0.5.6
  - @scalar/use-codemirror@0.7.15
  - @scalar/use-modal@0.1.9

## 0.7.33

### Patch Changes

- c3b215f: chore: no pinned peer dependency versions
- Updated dependencies [c3b215f]
  - @scalar/use-keyboard-event@0.5.5
  - @scalar/use-codemirror@0.7.14
  - @scalar/use-modal@0.1.8
  - @scalar/themes@0.4.2

## 0.7.32

### Patch Changes

- 55246e5: chore: rewrite all package.jsons (including their prod, dev and peer dependency requirements)
- Updated dependencies [55246e5]
  - @scalar/use-keyboard-event@0.5.4
  - @scalar/use-codemirror@0.7.13
  - @scalar/use-modal@0.1.7
  - @scalar/themes@0.4.1

## 0.7.31

### Patch Changes

- ceb7952: fix: show non 200 responses when not using the proxy

## 0.7.30

### Patch Changes

- 5da1fc6: security: update axios from 1.5.0 to 1.6.1

## 0.7.29

### Patch Changes

- 7fb2302: chore: add findVariables helper

## 0.7.28

### Patch Changes

- dab853a: chore: remove unused dependencies
- Updated dependencies [f4681d5]
- Updated dependencies [dab853a]
  - @scalar/use-codemirror@0.7.12
  - @scalar/use-modal@0.1.6

## 0.7.27

### Patch Changes

- c470db5: make --theme priority over --default-theme in misc places
- da431d9: fix: minor styling issues in the macOS native web view
- 3c6f54f: refactor: sendRequest with and without proxy
- 509db1e: refactor: move all api reference refs and watchers to hooks
- Updated dependencies [b0835a2]
- Updated dependencies [509db1e]
- Updated dependencies [a4f1b08]
  - @scalar/use-modal@0.1.5
  - @scalar/use-codemirror@0.7.11

## 0.7.26

### Patch Changes

- 9c7a5722: feat: add a dedicated cookie panel

## 0.7.25

### Patch Changes

- 8e2e4e5a: fix markdown collisions + prefix the card name

## 0.7.24

### Patch Changes

- 2f0b2f01: refactor: move json helpers to separate files

## 0.7.23

### Patch Changes

- 64f8a018: fix: make inputs consistent
- ce04794a: fix: issue where browser froze with JSON being passed into codemirror body
- Updated dependencies [64f8a018]
- Updated dependencies [7c3091c6]
  - @scalar/use-codemirror@0.7.10

## 0.7.22

### Patch Changes

- df74d017: fix: read response body from non-proxied requests
- 75d12f56: fix: don’t overwrite the address on small screens

## 0.7.21

### Patch Changes

- ab348cb5: Mobile improvements and layout fixes + consitency improvements
- aa24dbe6: fix: api client reset CSS
- ae247253: refactor: move generateRequest helpers to @scalar/api-reference
- Updated dependencies [aa24dbe6]
  - @scalar/use-codemirror@0.7.9

## 0.7.20

### Patch Changes

- d87566fd: refactor: new section components, new sidebar
- 43628366: Fix overflow and scrolling issues for API client
- dd8df965: feat: add requestbody to api client if json schema available

## 0.7.19

### Patch Changes

- 28cce042: fix: externalize markdown plugins to not break SSG

## 0.7.18

### Patch Changes

- 51029c1d: add interactive params, headers and variables

## 0.7.17

### Patch Changes

- Updated dependencies [fd38deb0]
  - @scalar/themes@0.4.0

## 0.7.16

### Patch Changes

- af4ec8d3: update discord links
- Updated dependencies [af4ec8d3]
  - @scalar/use-keyboard-event@0.5.3
  - @scalar/use-codemirror@0.7.8
  - @scalar/themes@0.3.11

## 0.7.15

### Patch Changes

- 33604a1b: chore: fix types
- 1cbcabd7: lots of amazing fixes from when we missed last patch
- Updated dependencies [1cbcabd7]
  - @scalar/use-keyboard-event@0.5.2
  - @scalar/use-codemirror@0.7.7
  - @scalar/use-modal@0.1.4
  - @scalar/themes@0.3.10

## 0.7.14

### Patch Changes

- eb0c3201: Lot's of small things + bigger temp fix for the multi content cards
- Updated dependencies [eb0c3201]
  - @scalar/themes@0.3.9

## 0.7.13

### Patch Changes

- Updated dependencies [be239745]
  - @scalar/use-codemirror@0.7.6

## 0.7.12

### Patch Changes

- 30aee7d1: feat: detect JSON in the body and automatically add a JSON content-type header to the request
- 24deb723: feat: add basic authentication and bearer authentication

## 0.7.11

### Patch Changes

- 7b6c21e5: request history ui and some other small type changes
- Updated dependencies [7b6c21e5]
  - @scalar/use-modal@0.1.3

## 0.7.10

### Patch Changes

- 46142c0a: reference theme fixes
- Updated dependencies [46142c0a]
  - @scalar/themes@0.3.8

## 0.7.9

### Patch Changes

- 4b4bc4d7: fix: update the URL
- 30d54d16: feat: make request method selectable
- 48df28ef: feat: disable send button if URL is empty
- Updated dependencies [1d02c811]
  - @scalar/themes@0.3.7

## 0.7.8

### Patch Changes

- b76f4d1e: Reference search + some app hover states
- Updated dependencies [b76f4d1e]
  - @scalar/use-codemirror@0.7.5
  - @scalar/use-modal@0.1.2
  - @scalar/themes@0.3.6

## 0.7.7

### Patch Changes

- 07b99141: api client in refs touch ups

## 0.7.6

### Patch Changes

- Updated dependencies [4985562c]
  - @scalar/use-codemirror@0.7.4
  - @scalar/themes@0.3.5

## 0.7.5

### Patch Changes

- Updated dependencies [58af0623]
  - @scalar/use-codemirror@0.7.3

## 0.7.4

### Patch Changes

- cd5f2685: codemirror colors + font fixes throughout app
- Updated dependencies [cd5f2685]
  - @scalar/themes@0.3.4

## 0.7.3

### Patch Changes

- 8823d7a1: cleanup ui
- Updated dependencies [8823d7a1]
  - @scalar/use-codemirror@0.7.2

## 0.7.2

### Patch Changes

- 449305f4: marketing content section
- 048555c6: feat: add CHANGELOG.md to the package
- Updated dependencies [449305f4]
- Updated dependencies [3e912c75]
- Updated dependencies [048555c6]
  - @scalar/use-modal@0.1.1
  - @scalar/use-keyboard-event@0.5.1
  - @scalar/use-codemirror@0.7.1
  - @scalar/themes@0.3.3

## 0.7.1

### Patch Changes

- 75a69ba7: feat: add `theme` prop and improve theme support
- 75a69ba7: refactor: rename @scalar/default-theme to @scalar/themes, add more themes
- Updated dependencies [75a69ba7]
- Updated dependencies [75a69ba7]
  - @scalar/themes@0.3.2

## 0.7.0

### Minor Changes

- 3b1fec80: feat: show response body preview for json and html, add html syntax highlighting, no preview for unknown content

### Patch Changes

- 6caceb45: - feat: send query parameters
  - feat: add a readOnly prop to the <APIClient /> component
  - fix: removed broken button loading state, replaced with boring loader animation
  - fix: z-index issue with API client, search and the request history
  - refactor: replace font sizes with variables, fix some minor font size issues
  - remove default User-Agent header (browser doesn’t like setting the User-Agent header)
  - chore: moved FlowModal to its own package
- addd9fa2: feat: use `default` prefix for all CSS variables
- Updated dependencies [b184bdf2]
- Updated dependencies [3b1fec80]
- Updated dependencies [addd9fa2]
  - @scalar/use-codemirror@0.7.0
  - @scalar/default-theme@0.3.1

## 0.6.0

### Minor Changes

- 87fda5af: chore: update dependencies

### Patch Changes

- ef080a26: chore: format package.json
- Updated dependencies [ef080a26]
- Updated dependencies [87fda5af]
  - @scalar/use-keyboard-event@0.5.0
  - @scalar/use-codemirror@0.6.0
  - @scalar/themes@0.3.0

## 0.5.5

### Patch Changes

- Updated dependencies [81336114]
  - @scalar/use-codemirror@0.5.4

## 0.5.4

### Patch Changes

- Updated dependencies [068669b6]
  - @scalar/use-codemirror@0.5.3

## 0.5.3

### Patch Changes

- Updated dependencies [ac492d94]
  - @scalar/use-codemirror@0.5.2

## 0.5.2

### Patch Changes

- d51aebe5: chore: remove source files from packages
- Updated dependencies [d51aebe5]
  - @scalar/use-keyboard-event@0.4.2
  - @scalar/use-codemirror@0.5.1

## 0.5.1

### Patch Changes

- e49cdc3a: chore: remove nunjucks as a dependency

## 0.5.0

### Minor Changes

- 0902d82c: \* refactor: add the CodeMirror component to @scalar/use-codemirror, use it everywhere
  - feat: allow to pass forceDarkMode to the CodeMirror component

### Patch Changes

- 10498d9d: chore: add README
- 494083a0: add more information to the package.json
- Updated dependencies [0902d82c]
- Updated dependencies [10498d9d]
- Updated dependencies [494083a0]
  - @scalar/use-codemirror@0.5.0
  - @scalar/use-keyboard-event@0.4.1
  - @scalar/themes@0.2.1

## 0.4.0

### Minor Changes

- 5057e213: make npm packages public :-)

### Patch Changes

- Updated dependencies [5057e213]
  - @scalar/themes@0.2.0
  - @scalar/use-codemirror@0.4.0
  - @scalar/use-keyboard-event@0.4.0

## 0.3.4

### Patch Changes

- 027012c8: fix: make nunjucks an external dependency

## 0.3.3

### Patch Changes

- 6420305b: fix: only require nunjucks where it’s needed
- Updated dependencies [6420305b]
  - @scalar/use-codemirror@0.3.1

## 0.3.2

### Patch Changes

- de4ff38: feat: add a new @scalar/themes package to import the variables and custom scrollbar CSS
- Updated dependencies [de4ff38]
  - @scalar/themes@0.1.1

## 0.3.1

### Patch Changes

- 0f345e4: fix: import CSS file from component, makes sure the CSS is included in the build

## 0.3.0

### Minor Changes

- b0f5221: manually releasing all packages to make sure the lastest version is on npm

### Patch Changes

- Updated dependencies [b0f5221]
  - @scalar/use-codemirror@0.3.0
  - @scalar/use-keyboard-event@0.3.0

## 0.2.1

### Patch Changes

- Updated dependencies [41b06cb]
  - @scalar/use-keyboard-event@0.2.1

## 0.2.0

### Minor Changes

- a ton of fixes, new fastify plugin

### Patch Changes

- Updated dependencies
  - @scalar/use-codemirror@0.2.0
  - @scalar/use-keyboard-event@0.2.0

## 0.1.21

### Patch Changes

- fix: Node polyfill issues (process undefined)

## 0.1.20

### Patch Changes

- add offline search and ui improvements
- add offline search, improve ui

## 0.1.19

### Patch Changes

- feat: add a standalone version

## 0.1.18

### Patch Changes

- fix sidebar height issue

## 0.1.17

### Patch Changes

- fix incorrect font sizes

## 0.1.16

### Patch Changes

- css variable fixes and hocuspocusurl prop

## 0.1.15

### Patch Changes

- fix: mismatched variables

## 0.1.14

### Patch Changes

- update font weights

## 0.1.13

### Patch Changes

- fix: use scalar fonts

## 0.1.12

### Patch Changes

- add useClientStore export

## 0.1.11

### Patch Changes

- add store export

## 0.1.10

### Patch Changes

- add force show to client

## 0.1.9

### Patch Changes

- update scalar variables

## 0.1.8

### Patch Changes

- remove hardcoded colors

## 0.1.7

### Patch Changes

- fix variables and missing styles

## 0.1.6

### Patch Changes

- fix: issues with empty responses, minor styling issues

## 0.1.5

### Patch Changes

- style: improve default style

## 0.1.4

### Patch Changes

- fix: externalize dependencies
- Updated dependencies
  - @scalar/use-codemirror@0.1.4
  - @scalar/use-keyboard-event@0.1.4

## 0.1.3

### Patch Changes

- fix: add CSS file to swagger editor
- Updated dependencies
  - @scalar/use-codemirror@0.1.3
  - @scalar/use-keyboard-event@0.1.3

## 0.1.2

### Patch Changes

- 7cd41bc: fix: point main entry to dist folder
- Updated dependencies [7cd41bc]
  - @scalar/use-codemirror@0.1.2
  - @scalar/use-keyboard-event@0.1.2

## 0.1.1

### Patch Changes

- f46e320: Initial release 👀
- Updated dependencies [f46e320]
  - @scalar/use-codemirror@0.1.1
  - @scalar/use-keyboard-event@0.1.1