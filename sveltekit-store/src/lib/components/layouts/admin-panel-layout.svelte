<div class="w-full h-full flex flex-col">
    <div class="h-12 w-full flex justify-between flex-shrink-0">
        <div class="flex flex-shrink-0 items-center gap-4">
            <slot name="toolbar" />
        </div>

        <slot name="action" />
    </div>

    <div class="flex-1 basis-0 overflow-y-auto">
        <slot name="content" />
    </div>
</div>