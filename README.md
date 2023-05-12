# lwc-nested-import-bug

small reproduction of nested import bug

Tracking issue [salesforce/lwc/issues/3495](https://github.com/salesforce/lwc/issues/3495)


### Folder Structure
```
.
└── modules/c/
    ├── app/
    │   ├── app.html
    │   ├── app.js
    │   └── app.js-meta.xml
    └── chartUtils/
        ├── controllers/
        │   ├── example_controller.js
        │   └── index.js
        ├── chartUtils.js
        └── chartUtils.js-meta.xml
```


### Error Message
```
Running LWR at: http://localhost:3000 | mode: dev

[info] Watching: C:\PATH_TO_REPO\lwc-nested-import-bug\local\layouts\main.njk
[info] Watching: C:\PATH_TO_REPO\lwc-nested-import-bug\modules\c\app\app.js
[info] Watching: C:\PATH_TO_REPO\lwc-nested-import-bug\modules\c\app\app.html
[info] Watching: C:\PATH_TO_REPO\lwc-nested-import-bug\modules\c\chartUtils\chartUtils.js
Error: Unable to find file "C:\PATH_TO_REPO\lwc-nested-import-bug\modules\c\chartUtils\example_controller"

    at resolveFileExtension (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+shared-utils@0.9.4_@locker+compiler@0.18.14_chokidar@3.5.3_esbuild@0.9.7_rollup@2.45.2/node_modules/@lwrjs/shared-utils/build/es/fs.js:53:15)

    at LwcModuleProvider.createModuleEntry (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+lwc-module-provider@0.9.4_@babel+core@7.21.8_@locker+compiler@0.18.14_chokidar@3.5.3_esbuild@0.9.7_rollup@2.45.2/node_modules/@lwrjs/lwc-module-provider/build/es/index.js:209:24)

    at file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+lwc-module-provider@0.9.4_@babel+core@7.21.8_@locker+compiler@0.18.14_chokidar@3.5.3_esbuild@0.9.7_rollup@2.45.2/node_modules/@lwrjs/lwc-module-provider/build/es/index.js:145:25

    at InflightTasks.execute (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+shared-utils@0.9.4_@locker+compiler@0.18.14_chokidar@3.5.3_esbuild@0.9.7_rollup@2.45.2/node_modules/@lwrjs/shared-utils/build/es/tasks.js:83:23)

    at LwcModuleProvider.getModuleEntry (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+lwc-module-provider@0.9.4_@babel+core@7.21.8_@locker+compiler@0.18.14_chokidar@3.5.3_esbuild@0.9.7_rollup@2.45.2/node_modules/@lwrjs/lwc-module-provider/build/es/index.js:144:48)

    at LwrModuleRegistry.delegateGetModuleEntryOnServices (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+module-registry@0.9.4_chokidar@3.5.3_esbuild@0.9.7/node_modules/@lwrjs/module-registry/build/es/index.js:226:43)

    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

    at async resolveRelativeImport (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+module-registry@0.9.4_chokidar@3.5.3_esbuild@0.9.7/node_modules/@lwrjs/module-registry/build/es/module-record.js:20:35)

    at async getModuleRecord (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+module-registry@0.9.4_chokidar@3.5.3_esbuild@0.9.7/node_modules/@lwrjs/module-registry/build/es/module-record.js:75:44)

    at async LwrModuleRegistry.createModuleDefinition (file:///PATH_TO_REPO/lwc-nested-import-bug/node_modules/.pnpm/@lwrjs+module-registry@0.9.4_chokidar@3.5.3_esbuild@0.9.7/node_modules/@lwrjs/module-registry/build/es/index.js:116:30)

[info] Watching: C:\PATH_TO_REPO\lwc-nested-import-bug\modules\c\chartUtils\controllers\index.js
```