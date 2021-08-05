export declare const Config: {
    readonly Buttons: {
        readonly editToolButton: "editToolButton";
        readonly viewControlsButton: "viewControlsButton";
        readonly freeHandToolButton: "freeHandToolButton";
        readonly highlightToolButton: "highlightToolButton";
        readonly underlineToolButton: "underlineToolButton";
        readonly squigglyToolButton: "squigglyToolButton";
        readonly strikeoutToolButton: "strikeoutToolButton";
        readonly rectangleToolButton: "rectangleToolButton";
        readonly ellipseToolButton: "ellipseToolButton";
        readonly lineToolButton: "lineToolButton";
        readonly arrowToolButton: "arrowToolButton";
        readonly polylineToolButton: "polylineToolButton";
        readonly polygonToolButton: "polygonToolButton";
        readonly cloudToolButton: "cloudToolButton";
        readonly signatureToolButton: "signatureToolButton";
        readonly freeTextToolButton: "freeTextToolButton";
        readonly stickyToolButton: "stickyToolButton";
        readonly calloutToolButton: "calloutToolButton";
        readonly stampToolButton: "stampToolButton";
        readonly toolsButton: "toolsButton";
        readonly searchButton: "searchButton";
        readonly shareButton: "shareButton";
        readonly editPagesButton: "editPagesButton";
        readonly viewLayersButton: "viewLayersButton";
        readonly printButton: "printButton";
        readonly closeButton: "closeButton";
        readonly saveCopyButton: "saveCopyButton";
        readonly saveIdenticalCopyButton: "saveIdenticalCopyButton";
        readonly saveFlattenedCopyButton: "saveFlattenedCopyButton";
        readonly formToolsButton: "formToolsButton";
        readonly fillSignToolsButton: "fillSignToolsButton";
        readonly moreItemsButton: "moreItemsButton";
        readonly digitalSignatureButton: "digitalSignatureButton";
        readonly thumbnailsButton: "thumbnailsButton";
        readonly listsButton: "listsButton";
        readonly thumbnailSlider: "thumbnailSlider";
        readonly outlineListButton: "outlineListButton";
        readonly annotationListButton: "annotationListButton";
        readonly userBookmarkListButton: "userBookmarkListButton";
        readonly reflowButton: "reflowButton";
        readonly editMenuButton: "editMenuButton";
        readonly cropPageButton: "cropPageButton";
        readonly undo: "undo";
        readonly redo: "redo";
        readonly addPageButton: "addPageButton";
        readonly saveReducedCopyButton: "saveReducedCopyButton";
        readonly saveCroppedCopyButton: "saveCroppedCopyButton";
        readonly savePasswordCopyButton: "savePasswordCopyButton";
    };
    readonly Tools: {
        readonly annotationEdit: "AnnotationEdit";
        readonly textSelect: "TextSelect";
        readonly pan: "Pan";
        readonly annotationEraserTool: "AnnotationEraserTool";
        readonly annotationCreateSticky: "AnnotationCreateSticky";
        readonly annotationCreateFreeHand: "AnnotationCreateFreeHand";
        readonly annotationCreateTextHighlight: "AnnotationCreateTextHighlight";
        readonly annotationCreateTextUnderline: "AnnotationCreateTextUnderline";
        readonly annotationCreateTextSquiggly: "AnnotationCreateTextSquiggly";
        readonly annotationCreateTextStrikeout: "AnnotationCreateTextStrikeout";
        readonly annotationCreateFreeText: "AnnotationCreateFreeText";
        readonly annotationCreateCallout: "AnnotationCreateCallout";
        readonly annotationCreateSignature: "AnnotationCreateSignature";
        readonly annotationCreateLine: "AnnotationCreateLine";
        readonly annotationCreateArrow: "AnnotationCreateArrow";
        readonly annotationCreatePolyline: "AnnotationCreatePolyline";
        readonly annotationCreateStamp: "AnnotationCreateStamp";
        readonly annotationCreateRubberStamp: "AnnotationCreateRubberStamp";
        readonly annotationCreateRectangle: "AnnotationCreateRectangle";
        readonly annotationCreateEllipse: "AnnotationCreateEllipse";
        readonly annotationCreatePolygon: "AnnotationCreatePolygon";
        readonly annotationCreatePolygonCloud: "AnnotationCreatePolygonCloud";
        readonly annotationCreateDistanceMeasurement: "AnnotationCreateDistanceMeasurement";
        readonly annotationCreatePerimeterMeasurement: "AnnotationCreatePerimeterMeasurement";
        readonly annotationCreateAreaMeasurement: "AnnotationCreateAreaMeasurement";
        readonly annotationCreateFileAttachment: "AnnotationCreateFileAttachment";
        readonly annotationCreateSound: "AnnotationCreateSound";
        readonly annotationCreateRedaction: "AnnotationCreateRedaction";
        readonly annotationCreateLink: "AnnotationCreateLink";
        readonly annotationCreateRedactionText: "AnnotationCreateRedactionText";
        readonly annotationCreateLinkText: "AnnotationCreateLinkText";
        readonly annotationCreateFreeHighlighter: "AnnotationCreateFreeHighlighter";
        readonly formCreateTextField: "FormCreateTextField";
        readonly formCreateCheckboxField: "FormCreateCheckboxField";
        readonly formCreateSignatureField: "FormCreateSignatureField";
        readonly formCreateRadioField: "FormCreateRadioField";
        readonly formCreateComboBoxField: "FormCreateComboBoxField";
        readonly formCreateListBoxField: "FormCreateListBoxField";
        readonly pencilKitDrawing: "PencilKitDrawing";
    };
    readonly FitMode: {
        readonly FitPage: "FitPage";
        readonly FitWidth: "FitWidth";
        readonly FitHeight: "FitHeight";
        readonly Zoom: "Zoom";
    };
    readonly LayoutMode: {
        readonly Single: "Single";
        readonly Continuous: "Continuous";
        readonly Facing: "Facing";
        readonly FacingContinuous: "FacingContinuous";
        readonly FacingCover: "FacingCover";
        readonly FacingCoverContinuous: "FacingCoverContinuous";
    };
    readonly FieldFlags: {
        readonly ReadOnly: 0;
        readonly Required: 1;
    };
    readonly AnnotationMenu: {
        readonly style: "style";
        readonly note: "note";
        readonly copy: "copy";
        readonly delete: "delete";
        readonly flatten: "flatten";
        readonly editText: "editText";
        readonly editInk: "editInk";
        readonly search: "search";
        readonly share: "share";
        readonly markupType: "markupType";
        readonly read: "read";
        readonly screenCapture: "screenCapture";
        readonly playSound: "playSound";
        readonly openAttachment: "openAttachment";
        readonly calibrate: "calibrate";
    };
    readonly EraserType: {
        readonly annotationEraser: "annotationEraser";
        readonly hybrideEraser: "hybrideEraser";
        readonly inkEraser: "inkEraser";
    };
    readonly LongPressMenu: {
        readonly copy: "copy";
        readonly paste: "paste";
        readonly search: "search";
        readonly share: "share";
        readonly read: "read";
    };
    readonly Actions: {
        readonly linkPress: "linkPress";
        readonly stickyNoteShowPopUp: "stickyNoteShowPopUp";
    };
    readonly AnnotationFlags: {
        readonly hidden: "hidden";
        readonly invisible: "invisible";
        readonly locked: "locked";
        readonly lockedContents: "lockedContents";
        readonly noRotate: "noRotate";
        readonly noView: "noView";
        readonly noZoom: "noZoom";
        readonly print: "print";
        readonly readOnly: "readOnly";
        readonly toggleNoView: "toggleNoView";
    };
    readonly DefaultToolbars: {
        readonly View: "PDFTron_View";
        readonly Annotate: "PDFTron_Annotate";
        readonly Draw: "PDFTron_Draw";
        readonly Insert: "PDFTron_Insert";
        readonly FillAndSign: "PDFTron_Fill_and_Sign";
        readonly PrepareForm: "PDFTron_Prepare_Form";
        readonly Measure: "PDFTron_Measure";
        readonly Pens: "PDFTron_Pens";
        readonly Redaction: "PDFTron_Redact";
        readonly Favorite: "PDFTron_Favorite";
    };
    readonly ToolbarIcons: {
        readonly View: "PDFTron_View";
        readonly Annotate: "PDFTron_Annotate";
        readonly Draw: "PDFTron_Draw";
        readonly Insert: "PDFTron_Insert";
        readonly FillAndSign: "PDFTron_Fill_and_Sign";
        readonly PrepareForm: "PDFTron_Prepare_Form";
        readonly Measure: "PDFTron_Measure";
        readonly Pens: "PDFTron_Pens";
        readonly Redaction: "PDFTron_Redact";
        readonly Favorite: "PDFTron_Favorite";
    };
    readonly CustomToolbarKey: {
        readonly Id: "id";
        readonly Name: "name";
        readonly Icon: "icon";
        readonly Items: "items";
    };
    readonly ThumbnailFilterMode: {
        readonly Annotated: "annotated";
        readonly Bookmarked: "bookmarked";
    };
    readonly Conversion: {
        readonly Screen: "screen";
        readonly Canvas: "canvas";
        readonly Page: "page";
    };
    readonly ViewModePickerItem: {
        readonly Crop: "viewModeCrop";
        readonly Rotation: "viewModeRotation";
        readonly ColorMode: "viewModeColorMode";
    };
    readonly ZoomLimitMode: {
        readonly None: "none";
        readonly Absolute: "absolute";
        readonly Relative: "relative";
    };
    readonly OverprintMode: {
        readonly On: "on";
        readonly Off: "off";
        readonly OnlyPDFX: "pdfx";
    };
    readonly ColorPostProcessMode: {
        readonly None: "none";
        readonly Invert: "invert";
        readonly GradientMap: "gradientMap";
        readonly NightMode: "nightMode";
    };
    readonly ReflowOrientation: {
        readonly Horizontal: "horizontal";
        readonly Vertical: "vertical";
    };
    readonly ExportFormat: {
        readonly BMP: "BMP";
        readonly JPEG: "JPEG";
        readonly PNG: "PNG";
    };
};
declare type ValueOf<T> = T[keyof T];
export declare namespace ConfigOptions {
    type Buttons = ValueOf<typeof Config.Buttons>;
    type Tools = ValueOf<typeof Config.Tools>;
    type FitMode = ValueOf<typeof Config.FitMode>;
    type LayoutMode = ValueOf<typeof Config.LayoutMode>;
    type FieldFlags = ValueOf<typeof Config.FieldFlags>;
    type AnnotationMenu = ValueOf<typeof Config.AnnotationMenu>;
    type EraserType = ValueOf<typeof Config.EraserType>;
    type LongPressMenu = ValueOf<typeof Config.LongPressMenu>;
    type Actions = ValueOf<typeof Config.Actions>;
    type AnnotationFlags = ValueOf<typeof Config.AnnotationFlags>;
    type DefaultToolbars = ValueOf<typeof Config.DefaultToolbars>;
    type ToolbarIcons = ValueOf<typeof Config.ToolbarIcons>;
    type ThumbnailFilterMode = ValueOf<typeof Config.ThumbnailFilterMode>;
    type Conversion = ValueOf<typeof Config.Conversion>;
    type ViewModePickerItem = ValueOf<typeof Config.ViewModePickerItem>;
    type ZoomLimitMode = ValueOf<typeof Config.ZoomLimitMode>;
    type OverprintMode = ValueOf<typeof Config.OverprintMode>;
    type ColorPostProcessMode = ValueOf<typeof Config.ColorPostProcessMode>;
    type ReflowOrientation = ValueOf<typeof Config.ReflowOrientation>;
    type ExportFormat = ValueOf<typeof Config.ExportFormat>;
    type CustomToolbarKey = {
        id: string;
        name: string;
        icon: ToolbarIcons;
        items: (Tools | Buttons)[];
    };
}
export {};
