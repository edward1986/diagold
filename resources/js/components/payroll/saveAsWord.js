export default {
    methods: {
        numberFloat(no) {
            return no ? Number.parseFloat(no) : 0
        },
        htmlBody(body, orientation = 'landscape') {
            var head = orientation === 'landscape' ? `<html xmlns:v="urn:schemas-microsoft-com:vml"xmlns:o="urn:schemas-microsoft-com:office:office"xmlns:w="urn:schemas-microsoft-com:office:word"xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset='utf-8'><meta name=ProgId content=Word.Document><meta name=Generator content="Microsoft Word 15"><meta name=Originator content="Microsoft Word 15"><!--[if gte mso 9]><xml> <o:DocumentProperties> <o:Author>johnn alvert baluyot</o:Author> <o:LastAuthor>Lorilla</o:LastAuthor> <o:Revision>2</o:Revision> <o:TotalTime>2</o:TotalTime> <o:Created>2019-09-13T02:45:00Z</o:Created> <o:LastSaved>2019-09-13T02:45:00Z</o:LastSaved> <o:Pages>1</o:Pages> <o:Words>65</o:Words> <o:Characters>375</o:Characters> <o:Lines>3</o:Lines> <o:Paragraphs>1</o:Paragraphs> <o:CharactersWithSpaces>439</o:CharactersWithSpaces> <o:Version>16.00</o:Version> </o:DocumentProperties> <o:OfficeDocumentSettings> <o:AllowPNG/> </o:OfficeDocumentSettings></xml><![endif]--><!--[if gte mso 9]><xml> <w:WordDocument> <w:SpellingState>Clean</w:SpellingState> <w:GrammarState>Clean</w:GrammarState> <w:TrackMoves>false</w:TrackMoves> <w:TrackFormatting/> <w:PunctuationKerning/> <w:ValidateAgainstSchemas/> <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid> <w:IgnoreMixedContent>false</w:IgnoreMixedContent> <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText> <w:DoNotPromoteQF/> <w:LidThemeOther>EN-PH</w:LidThemeOther> <w:LidThemeAsian>X-NONE</w:LidThemeAsian> <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript> <w:Compatibility> <w:BreakWrappedTables/> <w:SnapToGridInCell/> <w:WrapTextWithPunct/> <w:UseAsianBreakRules/> <w:DontGrowAutofit/> <w:SplitPgBreakAndParaMark/> <w:EnableOpenTypeKerning/> <w:DontFlipMirrorIndents/> <w:OverrideTableStyleHps/> </w:Compatibility> <m:mathPr> <m:mathFont m:val="Cambria Math"/> <m:brkBin m:val="before"/> <m:brkBinSub m:val="&#45;-"/> <m:smallFrac m:val="off"/> <m:dispDef/> <m:lMargin m:val="0"/> <m:rMargin m:val="0"/> <m:defJc m:val="centerGroup"/> <m:wrapIndent m:val="1440"/> <m:intLim m:val="subSup"/> <m:naryLim m:val="undOvr"/> </m:mathPr></w:WordDocument></xml><![endif]--><!--[if gte mso 9]><xml> <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false" DefSemiHidden="false" DefQFormat="false" DefPriority="99" LatentStyleCount="377"> <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/> <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 2"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 3"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 4"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 5"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 6"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 7"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 8"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 9"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 7"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 8"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 9"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 1"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 2"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 3"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 4"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 5"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 6"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 7"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 8"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 9"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Normal Indent"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="footnote text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="annotation text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="header"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="footer"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index heading"/> <w:LsdException Locked="false" Priority="35" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="caption"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="table of figures"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="envelope address"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="envelope return"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="footnote reference"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="annotation reference"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="line number"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="page number"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="endnote reference"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="endnote text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="table of authorities"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="macro"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="toa heading"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 5"/> <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Closing"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Signature"/> <w:LsdException Locked="false" Priority="1" SemiHidden="true" UnhideWhenUsed="true" Name="Default Paragraph Font"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text Indent"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Message Header"/> <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Salutation"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Date"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text First Indent"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text First Indent 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Note Heading"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text Indent 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text Indent 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Block Text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Hyperlink"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="FollowedHyperlink"/> <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/> <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Document Map"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Plain Text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="E-mail Signature"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Top of Form"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Bottom of Form"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Normal (Web)"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Acronym"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Address"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Cite"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Code"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Definition"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Keyboard"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Preformatted"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Sample"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Typewriter"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Variable"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Normal Table"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="annotation subject"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="No List"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Outline List 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Outline List 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Outline List 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Simple 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Simple 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Simple 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Colorful 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Colorful 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Colorful 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 7"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 8"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 7"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 8"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table 3D effects 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table 3D effects 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table 3D effects 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Contemporary"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Elegant"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Professional"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Subtle 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Subtle 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Web 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Web 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Web 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Balloon Text"/> <w:LsdException Locked="false" Priority="39" Name="Table Grid"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Theme"/> <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/> <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading"/> <w:LsdException Locked="false" Priority="61" Name="Light List"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/> <w:LsdException Locked="false" Priority="70" Name="Dark List"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/> <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/> <w:LsdException Locked="false" Priority="34" QFormat="true" Name="List Paragraph"/> <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/> <w:LsdException Locked="false" Priority="30" QFormat="true" Name="Intense Quote"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/> <w:LsdException Locked="false" Priority="19" QFormat="true" Name="Subtle Emphasis"/> <w:LsdException Locked="false" Priority="21" QFormat="true" Name="Intense Emphasis"/> <w:LsdException Locked="false" Priority="31" QFormat="true" Name="Subtle Reference"/> <w:LsdException Locked="false" Priority="32" QFormat="true" Name="Intense Reference"/> <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/> <w:LsdException Locked="false" Priority="37" SemiHidden="true" UnhideWhenUsed="true" Name="Bibliography"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/> <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/> <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/> <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/> <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/> <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/> <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 1"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 2"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 3"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 4"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 5"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 6"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 6"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 6"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 1"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 2"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 3"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 4"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 5"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 6"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 6"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Mention"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Smart Hyperlink"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Hashtag"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Unresolved Mention"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Smart Link"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Smart Link Error"/> </w:LatentStyles></xml><![endif]--><style><!-- /* Font Definitions */ @font-face{font-family:"Cambria Math";panose-1:2 4 5 3 5 4 6 3 2 4;mso-font-charset:0;mso-generic-font-family:roman;mso-font-pitch:variable;mso-font-signature:3 0 0 0 1 0;}@font-face{font-family:Calibri;panose-1:2 15 5 2 2 2 4 3 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-536858881 -1073732485 9 0 511 0;}@font-face{font-family:"Arial Black";panose-1:2 11 10 4 2 1 2 2 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-1610612049 1073772795 0 0 159 0;}/* Style Definitions */ p.MsoNormal, li.MsoNormal, div.MsoNormal{mso-style-unhide:no;mso-style-qformat:yes;mso-style-parent:"";margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;mso-pagination:widow-orphan;font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}span.SpellE{mso-style-name:"";mso-spl-e:yes;}span.GramE{mso-style-name:"";mso-gram-e:yes;}.MsoChpDefault{mso-style-type:export-only;mso-default-props:yes;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}.MsoPapDefault{mso-style-type:export-only;margin-bottom:8.0pt;line-height:107%;}@page WordSection1{size:792.0pt 612.0pt;${orientation === 'landscape' ? 'mso-page-orientation:landscape;' : ''}margin:72.0pt 72.0pt 72.0pt 72.0pt;mso-header-margin:35.4pt;mso-footer-margin:35.4pt;mso-paper-source:0;}div.WordSection1{page:WordSection1;}--></style><!--[if gte mso 10]><style>/* Style Definitions */ table.MsoNormalTable{mso-style-name:"Table Normal";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-noshow:yes;mso-style-priority:99;mso-style-parent:"";mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-para-margin-top:0cm;mso-para-margin-right:0cm;mso-para-margin-bottom:8.0pt;mso-para-margin-left:0cm;line-height:107%;mso-pagination:widow-orphan;font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}table.MsoTableGrid{mso-style-name:"Table Grid";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-priority:39;mso-style-unhide:no;border:solid windowtext 1.0pt;mso-border-alt:solid windowtext .5pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:.5pt solid windowtext;mso-border-insidev:.5pt solid windowtext;mso-para-margin:0cm;mso-para-margin-bottom:.0001pt;mso-pagination:widow-orphan;font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}</style><![endif]--><!--[if gte mso 9]><xml> <o:shapedefaults v:ext="edit" spidmax="1026"/></xml><![endif]--><!--[if gte mso 9]><xml> <o:shapelayout v:ext="edit"> <o:idmap v:ext="edit" data="1"/> </o:shapelayout></xml><![endif]--></head>` : `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv="Content-Type" content="text/html; charset=unicode"><meta name="ProgId" content="Word.Document"><meta name="Generator" content="Microsoft Word 15"><meta name="Originator" content="Microsoft Word 15"><link rel="File-List" href="TEMPLATE_files/filelist.xml"> <!--[if gte mso 9]><xml> <o:DocumentProperties> <o:Author>johnn alvert baluyot</o:Author> <o:LastAuthor>Lorilla</o:LastAuthor> <o:Revision>2</o:Revision> <o:TotalTime>5</o:TotalTime> <o:Created>2019-10-02T02:22:00Z</o:Created> <o:LastSaved>2019-10-02T02:22:00Z</o:LastSaved> <o:Pages>1</o:Pages> <o:Words>51</o:Words> <o:Characters>293</o:Characters> <o:Lines>2</o:Lines> <o:Paragraphs>1</o:Paragraphs> <o:CharactersWithSpaces>343</o:CharactersWithSpaces> <o:Version>16.00</o:Version> </o:DocumentProperties> <o:OfficeDocumentSettings> <o:AllowPNG/> </o:OfficeDocumentSettings> </xml><![endif]--><link rel="themeData" href="TEMPLATE_files/themedata.thmx"><link rel="colorSchemeMapping" href="TEMPLATE_files/colorschememapping.xml"> <!--[if gte mso 9]><xml> <w:WordDocument> <w:SpellingState>Clean</w:SpellingState> <w:GrammarState>Clean</w:GrammarState> <w:TrackMoves>false</w:TrackMoves> <w:TrackFormatting/> <w:PunctuationKerning/> <w:ValidateAgainstSchemas/> <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid> <w:IgnoreMixedContent>false</w:IgnoreMixedContent> <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText> <w:DoNotPromoteQF/> <w:LidThemeOther>EN-PH</w:LidThemeOther> <w:LidThemeAsian>X-NONE</w:LidThemeAsian> <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript> <w:Compatibility> <w:BreakWrappedTables/> <w:SnapToGridInCell/> <w:WrapTextWithPunct/> <w:UseAsianBreakRules/> <w:DontGrowAutofit/> <w:SplitPgBreakAndParaMark/> <w:EnableOpenTypeKerning/> <w:DontFlipMirrorIndents/> <w:OverrideTableStyleHps/> </w:Compatibility> <m:mathPr> <m:mathFont m:val="Cambria Math"/> <m:brkBin m:val="before"/> <m:brkBinSub m:val="&#45;-"/> <m:smallFrac m:val="off"/> <m:dispDef/> <m:lMargin m:val="0"/> <m:rMargin m:val="0"/> <m:defJc m:val="centerGroup"/> <m:wrapIndent m:val="1440"/> <m:intLim m:val="subSup"/> <m:naryLim m:val="undOvr"/> </m:mathPr></w:WordDocument> </xml><![endif]--><!--[if gte mso 9]><xml> <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false" DefSemiHidden="false" DefQFormat="false" DefPriority="99" LatentStyleCount="377"> <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/> <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 2"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 3"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 4"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 5"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 6"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 7"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 8"/> <w:LsdException Locked="false" Priority="9" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="heading 9"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 7"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 8"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index 9"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 1"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 2"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 3"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 4"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 5"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 6"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 7"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 8"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" Name="toc 9"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Normal Indent"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="footnote text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="annotation text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="header"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="footer"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="index heading"/> <w:LsdException Locked="false" Priority="35" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="caption"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="table of figures"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="envelope address"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="envelope return"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="footnote reference"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="annotation reference"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="line number"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="page number"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="endnote reference"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="endnote text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="table of authorities"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="macro"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="toa heading"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Bullet 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Number 5"/> <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Closing"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Signature"/> <w:LsdException Locked="false" Priority="1" SemiHidden="true" UnhideWhenUsed="true" Name="Default Paragraph Font"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text Indent"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="List Continue 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Message Header"/> <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Salutation"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Date"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text First Indent"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text First Indent 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Note Heading"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text Indent 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Body Text Indent 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Block Text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Hyperlink"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="FollowedHyperlink"/> <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/> <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Document Map"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Plain Text"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="E-mail Signature"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Top of Form"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Bottom of Form"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Normal (Web)"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Acronym"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Address"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Cite"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Code"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Definition"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Keyboard"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Preformatted"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Sample"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Typewriter"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="HTML Variable"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Normal Table"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="annotation subject"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="No List"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Outline List 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Outline List 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Outline List 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Simple 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Simple 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Simple 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Classic 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Colorful 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Colorful 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Colorful 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Columns 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 7"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Grid 8"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 4"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 5"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 7"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table List 8"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table 3D effects 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table 3D effects 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table 3D effects 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Contemporary"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Elegant"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Professional"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Subtle 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Subtle 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Web 1"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Web 2"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Web 3"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Balloon Text"/> <w:LsdException Locked="false" Priority="39" Name="Table Grid"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Table Theme"/> <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/> <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading"/> <w:LsdException Locked="false" Priority="61" Name="Light List"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/> <w:LsdException Locked="false" Priority="70" Name="Dark List"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/> <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/> <w:LsdException Locked="false" Priority="34" QFormat="true" Name="List Paragraph"/> <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/> <w:LsdException Locked="false" Priority="30" QFormat="true" Name="Intense Quote"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/> <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/> <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/> <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/> <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/> <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/> <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/> <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/> <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/> <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/> <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/> <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/> <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/> <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/> <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/> <w:LsdException Locked="false" Priority="19" QFormat="true" Name="Subtle Emphasis"/> <w:LsdException Locked="false" Priority="21" QFormat="true" Name="Intense Emphasis"/> <w:LsdException Locked="false" Priority="31" QFormat="true" Name="Subtle Reference"/> <w:LsdException Locked="false" Priority="32" QFormat="true" Name="Intense Reference"/> <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/> <w:LsdException Locked="false" Priority="37" SemiHidden="true" UnhideWhenUsed="true" Name="Bibliography"/> <w:LsdException Locked="false" Priority="39" SemiHidden="true" UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/> <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/> <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/> <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/> <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/> <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/> <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 1"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 2"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 3"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 4"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 5"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light Accent 6"/> <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/> <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/> <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/> <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/> <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful Accent 6"/> <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful Accent 6"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 1"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 1"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 2"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 2"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 3"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 3"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 4"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 4"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 5"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 5"/> <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light Accent 6"/> <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/> <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/> <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/> <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/> <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful Accent 6"/> <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful Accent 6"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Mention"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Smart Hyperlink"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Hashtag"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Unresolved Mention"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Smart Link"/> <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true" Name="Smart Link Error"/> </w:LatentStyles> </xml><![endif]--><style>@font-face{font-family:"Cambria Math";panose-1:2 4 5 3 5 4 6 3 2 4;mso-font-charset:0;mso-generic-font-family:roman;mso-font-pitch:variable;mso-font-signature:3 0 0 0 1 0}@font-face{font-family:Calibri;panose-1:2 15 5 2 2 2 4 3 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-536859905 1073786111 1 0 511 0}@font-face{font-family:"Arial Black";panose-1:2 11 10 4 2 1 2 2 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-1610612049 1073772795 0 0 159 0}p.MsoNormal,li.MsoNormal,div.MsoNormal{mso-style-unhide:no;mso-style-qformat:yes;mso-style-parent:"";margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:105%;mso-pagination:widow-orphan;font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}p.msonormal0,li.msonormal0,div.msonormal0{mso-style-name:msonormal;mso-style-unhide:no;mso-margin-top-alt:auto;margin-right:0cm;mso-margin-bottom-alt:auto;margin-left:0cm;mso-pagination:widow-orphan;font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";mso-fareast-theme-font:minor-fareast}span.GramE{mso-style-name:"";mso-gram-e:yes}.MsoChpDefault{mso-style-type:export-only;mso-default-props:yes;font-size:10.0pt;mso-ansi-font-size:10.0pt;mso-bidi-font-size:10.0pt;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}@page WordSection1{size:612.0pt 792.0pt;margin:36.0pt 36.0pt 36.0pt 36.0pt;mso-header-margin:35.4pt;mso-footer-margin:35.4pt;mso-paper-source:0}div.WordSection1{page:WordSection1}</style><!--[if gte mso 10]><style>table.MsoNormalTable{mso-style-name:"Table Normal";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-noshow:yes;mso-style-priority:99;mso-style-parent:"";mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-para-margin:0cm;mso-para-margin-bottom:.0001pt;mso-pagination:widow-orphan;font-size:10.0pt;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}table.MsoTableGrid{mso-style-name:"Table Grid";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-priority:39;mso-style-unhide:no;border:solid windowtext 1.0pt;mso-border-alt:solid windowtext .5pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:.5pt solid windowtext;mso-border-insidev:.5pt solid windowtext;mso-para-margin:0cm;mso-para-margin-bottom:.0001pt;mso-pagination:widow-orphan;font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}</style><![endif]--><!--[if gte mso 9]><xml> <o:shapedefaults v:ext="edit" spidmax="1026"/> </xml><![endif]--><!--[if gte mso 9]><xml> <o:shapelayout v:ext="edit"> <o:idmap v:ext="edit" data="1"/> </o:shapelayout></xml><![endif]--></head>`
            return `${head}<body lang=EN-PH style='tab-interval:36.0pt'>${body}</body></html>`
        },
        saveAsManual(value, obj, month, year, range, day, monthName, breaks, events = [], manual) {
            var vm = this
            return `<div class=WordSection1>
<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:18.0pt;line-height:107%;font-family:
"Arial Black",sans-serif'>DIAGOLD PAWNSHOP INC.<o:p></o:p></span></p>

<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:9.0pt;line-height:107%;font-family:
"Arial",sans-serif'>Toy Bldg. <span class=SpellE>Lapu</span> -<span
class=SpellE>Lapu</span> Street <span class=SpellE>Agdao</span> Davao City<o:p></o:p></span></p>

<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:12.0pt;line-height:107%;font-family:
"Arial Black",sans-serif;mso-bidi-font-family:Arial'>SALARY SLIP<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:9.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Employee Name: ${value.name}<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Duration: </span><span class=GramE><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'>(</span></span><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'>${monthName}
${range},${year})<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Total Days &amp; Hours: </span><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'>
<span class=GramE>(days : ${(obj.regDay + obj.restDay + obj.clate + obj.cut)} & ${value.attendances.reduce((prev, curr) => {
                const value = Number(curr.timing);
                if (!isNaN(value)) {
                    var consume_time_in = vm.timeStringToFloat(curr.started_at.slice(11, 16)) <= vm.timeStringToFloat('08:00') ? ((vm.timeStringToFloat('08:00') - vm.timeStringToFloat(curr.started_at.slice(11, 16))) * 3600) : 0
                    //console.log(consume_time_in, 'started_in', vm.timeStringToFloat(''), 'time_in', vm.timeStringToFloat(curr.started_at.slice(11, 16)) , 'time', curr.started_at.slice(11, 16), vm.timeStringToFloat('08:00'))

                    return prev + Math.floor((parseInt(curr.timing - consume_time_in, 10)) / 3600);
                } else {
                    return prev;
                }
            }, 0)} <span class=SpellE>hrs.</span>)<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=871
style='width:100%;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
<tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Earnings<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;
border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Deductions<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;
border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:1;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Basic
Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><span
style='mso-spacerun:yes'>${manual.basicPay}</span><o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>SSS
Contribution:<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.sss_deduction ? value.sss_deduction : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:2;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Rest
Day Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${obj.restDay ? obj.restDay * 381 : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>PHIC<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.philhealth_deduction ? value.philhealth_deduction : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:3;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Holiday
Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${manual.reg}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>HDMF
Contribution<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.pagibig_deduction ? value.pagibig_deduction : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:4;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Special
Holiday Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${manual.special}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>SSS
Loan<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.sss_loan ? value.sss_loan : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:5;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>25% OT<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${obj.overTime25 ? Number.parseFloat((381 * 1.25 / 8) * (!isNaN(Number(obj.overTime25)) ? Number.parseInt(obj.overTime25) : 0)).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>HDMF
Loan<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.pagibig_loan ? value.pagibig_loan : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:6;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>30 % OT<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${obj.overTime30 ? Number.parseFloat((381 * 0.3 / 8) * (!isNaN(Number(obj.overTime30)) ? Number.parseFloat(obj.overTime30) : 0)).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Total <o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${manual.q23 ? Number.parseFloat(manual.q23).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>DE MINIMIS<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${Number.parseFloat(manual.de_minimis)}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
</td>

<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Total<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${manual.q15 ? Number.parseFloat(manual.q15).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Net
Salary Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${Number.parseFloat(manual.q15 - manual.q23) ? Number.parseFloat((manual.q15 - manual.q23) + manual.de_minimis).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
</table>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Signature <span class=GramE>Of</span> Employee:
__________________________<o:p></o:p></span></p>
<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:9.0pt;line-height:50%;font-family:
"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
${breaks ? '<p style="page-break-before: always" >' : ''}
</div>`
        },
        saveAsWord(value, obj, month, year, range, day, monthName, breaks, events = []) {
            var vm = this, event = _.map(events, (o) => {
                var end = new Date(o.end_date),
                    start = new Date(o.start_date),
                    tStartDate = start.getTime(),
                    tEndDate = end.getTime(),
                    nDifference = Math.abs(tEndDate - tStartDate),
                    fDiffernceInDays = Math.round(nDifference / (1000 * 86400));

                return {
                    duration: fDiffernceInDays + 1,
                    occurrence: o.occurrence == '0' ? 0 : 1
                }
            })

            var reg = _.reduce(event, (sum, o) => {
                return o.occurrence === '0' ? sum.duration + o : sum
            }, 0)
            var special = _.reduce(event, (sum, o) => {
                return o.occurrence !== '0' ? sum + o.duration : sum
            }, 0)


            var basicPay = value.salary ? ((value.salary / 2) - (vm.numberFloat(obj.loa) * 381) - (((vm.numberFloat(obj.late) + vm.numberFloat(obj.ut)) * (381 / 8))).toFixed(2)) : 0,
                q15 = basicPay + (vm.numberFloat(obj.restDay) * 381) + vm.numberFloat(reg * 381) + vm.numberFloat(special * (14.29 * 8)) + (vm.numberFloat((381 * 1.25 / 8) * (!isNaN(Number(obj.overTime25)) ? Number.parseFloat(obj.overTime25) : 0))) + vm.numberFloat(((381 / 8) * 0.30) * (!isNaN(Number(obj.overTime30)) ? Number.parseFloat(obj.overTime30) : 0)),
                q23 = vm.numberFloat(value.sss_deduction) + vm.numberFloat(value.sss_loan) + vm.numberFloat(value.pagibig_deduction) + vm.numberFloat(value.pagibig_loan) + vm.numberFloat(value.philhealth_deduction),
                de_minimis = vm.numberFloat(value.allowance)
            return `<div class=WordSection1>
<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:18.0pt;line-height:107%;font-family:
"Arial Black",sans-serif'>DIAGOLD PAWNSHOP INC.<o:p></o:p></span></p>

<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:9.0pt;line-height:107%;font-family:
"Arial",sans-serif'>Toy Bldg. <span class=SpellE>Lapu</span> -<span
class=SpellE>Lapu</span> Street <span class=SpellE>Agdao</span> Davao City<o:p></o:p></span></p>

<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:12.0pt;line-height:107%;font-family:
"Arial Black",sans-serif;mso-bidi-font-family:Arial'>SALARY SLIP<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:9.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Employee Name: ${value.name}<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Duration: </span><span class=GramE><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'>(</span></span><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'>${monthName}
${range},${year})<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Total Days &amp; Hours: </span><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'>
<span class=GramE>(days : ${(obj.regDay + obj.restDay + obj.clate + obj.cut)} & ${value.attendances.reduce((prev, curr) => {
                const value = Number(curr.timing);
                if (!isNaN(value)) {
                    var consume_time_in = vm.timeStringToFloat(curr.started_at.slice(11, 16)) <= vm.timeStringToFloat('08:00') ? ((vm.timeStringToFloat('08:00') - vm.timeStringToFloat(curr.started_at.slice(11, 16))) * 3600) : 0
                    //console.log(consume_time_in, 'started_in', vm.timeStringToFloat(''), 'time_in', vm.timeStringToFloat(curr.started_at.slice(11, 16)) , 'time', curr.started_at.slice(11, 16), vm.timeStringToFloat('08:00'))

                    return prev + Math.floor((parseInt(curr.timing - consume_time_in, 10)) / 3600);
                } else {
                    return prev;
                }
            }, 0)} <span class=SpellE>hrs.</span>)<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=871
style='width:100%;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
<tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Earnings<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;
border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Deductions<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;
border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:1;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Basic
Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><span
style='mso-spacerun:yes'>${basicPay}</span><o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>SSS
Contribution:<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.sss_deduction ? value.sss_deduction : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:2;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Rest
Day Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${obj.restDay ? obj.restDay * 381 : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>PHIC<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.philhealth_deduction ? value.philhealth_deduction : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:3;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Holiday
Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${reg * 381}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>HDMF
Contribution<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.pagibig_deduction ? value.pagibig_deduction : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:4;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Special
Holiday Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${special * (14.29 * 8)}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>SSS
Loan<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.sss_loan ? value.sss_loan : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:5;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>25% OT<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${obj.overTime25 ? Number.parseFloat((381 * 1.25 / 8) * (!isNaN(Number(obj.overTime25)) ? Number.parseInt(obj.overTime25) : 0)).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>HDMF
Loan<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${value.pagibig_loan ? value.pagibig_loan : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:6;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>30 % OT<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${obj.overTime30 ? Number.parseFloat((381 * 0.3 / 8) * (!isNaN(Number(obj.overTime30)) ? Number.parseFloat(obj.overTime30) : 0)).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Total <o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${q23 ? Number.parseFloat(q23).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>DE MINIMIS<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${Number.parseFloat(de_minimis)}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
</td>

<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>
<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;
border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Total<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${q15 ? Number.parseFloat(q15).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>Net
Salary Pay<o:p></o:p></span></p>
</td>
<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>
<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal'><span style='font-size:12.0pt;font-family:"Arial",sans-serif'>${Number.parseFloat(q15 - q23) ? Number.parseFloat((q15 - q23) + de_minimis).toFixed(2) : 0}<o:p>&nbsp;</o:p></span></p>
</td>
</tr>
</table>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-size:12.0pt;line-height:107%;font-family:"Arial Black",sans-serif;
mso-bidi-font-family:Arial'>Signature <span class=GramE>Of</span> Employee:
__________________________<o:p></o:p></span></p>
<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:center'><span style='font-size:9.0pt;line-height:50%;font-family:
"Arial",sans-serif'><o:p>&nbsp;</o:p></span></p>
${breaks ? '<p style="page-break-before: always" >' : ''}
</div>`
        },
    }
}
