import ContentContainer from "../../layout-containers/content-container/ContentContainer";
import SectionContainer from "../../layout-containers/section-container/SectionContainer";
import StickyContainer from "../../layout-containers/sticky-container/StickyContainer";
import TitleContainer from "../../layout-containers/title-container/TitleContainer";

export default function AboutSection() {
    return (
        <SectionContainer id={'about'}>
            <TitleContainer>
                <StickyContainer>
                    [SectionHeadingWrapper]
                        [SectionTitleWrapper]
                            [SectionTitle /]
                        [/SectionTitleWrapper]
                        [SkipToLink /]
                    [/SectionHeadingWrapper]
                </StickyContainer>
            </TitleContainer>
            <ContentContainer>
                [MediumContainer]
                    [ContainerTitleWrapper]
                        [MediumTitle /]
                    [/ContainerTitleWrapper]
                    [MediumContent /]
                [/MediumContainer]
                [MediumContainer]
                    [ContainerTitleWrapper]
                        [MediumTitle /]
                    [/ContainerTitleWrapper]
                    [MediumContent /]
                [/MediumContainer]
                [MediumContainer]
                    [ContainerTitleWrapper]
                        [MediumTitle /]
                    [/ContainerTitleWrapper]
                    [MediumContent /]
                [/MediumContainer]
            </ContentContainer>
        </SectionContainer>
    )
}