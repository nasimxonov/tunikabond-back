import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageAboutcontents extends Struct.ComponentSchema {
  collectionName: 'components_homepage_aboutcontents';
  info: {
    displayName: 'aboutcontents';
    icon: 'layer';
  };
  attributes: {
    aboutdescription: Schema.Attribute.Text;
    aboutmedia: Schema.Attribute.Component<'homepage.aboutmedias', true>;
    abouttitle: Schema.Attribute.String;
  };
}

export interface HomepageAboutmedias extends Struct.ComponentSchema {
  collectionName: 'components_homepage_aboutmedias';
  info: {
    displayName: 'aboutmedias';
    icon: 'dashboard';
  };
  attributes: {
    aboutimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    aboutstat: Schema.Attribute.Component<'homepage.aboutstats', true>;
  };
}

export interface HomepageAboutstats extends Struct.ComponentSchema {
  collectionName: 'components_homepage_aboutstats';
  info: {
    displayName: 'aboutstats';
  };
  attributes: {
    aboutstatdesc: Schema.Attribute.Text;
    aboutstatnum: Schema.Attribute.Integer;
    aboutstattitle: Schema.Attribute.String;
  };
}

export interface HomepageBrands extends Struct.ComponentSchema {
  collectionName: 'components_homepage_brands';
  info: {
    displayName: 'Brands';
  };
  attributes: {
    brandsImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_homepage_contact_infos';
  info: {
    displayName: 'contact_info';
    icon: 'phone';
  };
  attributes: {
    contactcontent: Schema.Attribute.Component<'homepage.contacticon', true>;
  };
}

export interface HomepageContacticon extends Struct.ComponentSchema {
  collectionName: 'components_homepage_contacticons';
  info: {
    displayName: 'contacticon';
    icon: 'crown';
  };
  attributes: {
    iconimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface HomepageForm extends Struct.ComponentSchema {
  collectionName: 'components_homepage_forms';
  info: {
    displayName: 'form';
    icon: 'envelop';
  };
  attributes: {
    formdesc: Schema.Attribute.Text;
    formtitle: Schema.Attribute.String;
  };
}

export interface HomepageFormblock extends Struct.ComponentSchema {
  collectionName: 'components_homepage_formblocks';
  info: {
    displayName: 'formblock';
    icon: 'envelop';
  };
  attributes: {
    formdesc: Schema.Attribute.Text;
    formtitle: Schema.Attribute.String;
  };
}

export interface HomepageSliuders extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sliuders';
  info: {
    displayName: 'sliuders';
    icon: 'landscape';
  };
  attributes: {
    slidedescription: Schema.Attribute.Text;
    slideimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slidetitle: Schema.Attribute.Text;
  };
}

export interface HomepageTopcontent extends Struct.ComponentSchema {
  collectionName: 'components_homepage_topcontents';
  info: {
    displayName: 'topcontent';
    icon: 'arrowUp';
  };
  attributes: {
    topdescription: Schema.Attribute.Text;
    toptitle: Schema.Attribute.String;
  };
}

export interface HomepageWorkTime extends Struct.ComponentSchema {
  collectionName: 'components_homepage_work_times';
  info: {
    displayName: 'work_time';
    icon: 'clock';
  };
  attributes: {
    work_days: Schema.Attribute.String;
    work_time_from: Schema.Attribute.String;
    work_time_to: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    description: Schema.Attribute.Text;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.aboutcontents': HomepageAboutcontents;
      'homepage.aboutmedias': HomepageAboutmedias;
      'homepage.aboutstats': HomepageAboutstats;
      'homepage.brands': HomepageBrands;
      'homepage.contact-info': HomepageContactInfo;
      'homepage.contacticon': HomepageContacticon;
      'homepage.form': HomepageForm;
      'homepage.formblock': HomepageFormblock;
      'homepage.sliuders': HomepageSliuders;
      'homepage.topcontent': HomepageTopcontent;
      'homepage.work-time': HomepageWorkTime;
      'seo.seo': SeoSeo;
    }
  }
}
