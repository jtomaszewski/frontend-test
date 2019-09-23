import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import React from 'react';
import CountryInfo, {
  GET_COUNTRY_QUERY,
  GetCountryQueryData
} from './CountryInfo';
import { CountryInfoCard } from './ui/CountryInfoCard';
import wait from 'waait';
import { silenceActWarning } from './test-utils/silenceActWarning';

function prepare({
  code = 'CA',
  data,
  error
}: { code?: string; data?: GetCountryQueryData; error?: any } = {}) {
  const mocks =
    data || error
      ? [
          {
            request: {
              query: GET_COUNTRY_QUERY,
              variables: { code }
            },
            result: {
              data,
              error
            }
          }
        ]
      : [];

  const Wrapper = (props: { children: any }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {props.children}
    </MockedProvider>
  );

  return mount(<CountryInfo code={code} />, {
    wrappingComponent: Wrapper
  });
}

describe('CountryInfo', () => {
  silenceActWarning();

  it('if not loaded yet, renders loading state', async () => {
    const output = prepare();
    expect(output.find(CountryInfoCard).length).toEqual(0);
    expect(output.text()).toMatch('Loading...');
  });

  it('once fetch succeeds, renders a country info card', async () => {
    const output = prepare({
      data: {
        country: {
          emoji: 'pl',
          name: 'Poland',
          currency: 'pln',
          languages: [{ name: 'Polish' }],
          phone: '48'
        }
      }
    });
    await wait(0);
    output.update();

    expect(output.find(CountryInfoCard).length).toEqual(1);
    expect(output.find(CountryInfoCard).props()).toMatchObject({
      emoji: 'pl',
      name: 'Poland',
      currency: 'pln',
      languages: ['Polish'],
      phoneCode: '48'
    });
  });

  it('if fetch fails, renders an error message', async () => {
    const output = prepare({
      error: true
    });
    await wait(0);
    output.update();

    expect(output.text()).toMatch('Loading failed');
  });
});
