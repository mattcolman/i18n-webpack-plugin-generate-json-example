import React from 'react';

export default function Main() {
  return (
    <div>
      <div>{__('oh hi')}</div>
      <div>{__('these lines of text')}</div>
      <div>{__('need translations!!')}</div>
      <div>{__('so let i18n-webpack-plugin-generate-json, generate the json file for you!')}</div>
    </div>
  );
}
