import Head from 'next/head'
import Link from 'next/link';
import { useContext, useState } from "react";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { GlobalContext } from "../utils/GlobalContext";
import TestWrapper from '../components/TestWrapper';
import Code from '../components/Code';
import BackToTop from '../components/BackToTop';

export default function Example() {
  const [darkMode, setDarkMode] = useContext(GlobalContext);
  const inputClassName = `text-sm transition-all w-full px-3 py-[0.6rem] rounded-md mt-2
          dark:text-white bg-white dark:bg-neutral-900  
          border border-gray-300 dark:border-neutral-700 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none`;
  const buttonClassName = `block my-2 rounded text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all`;

  const [name, setName] = useState("john.doe")
  const [password, setPassword] = useState("12345678")
  const [checked, setChecked] = useState(true)
  const [text, setText] = useState("text")
  const [number, setNumber] = useState(5)
  const [select, setSelect] = useState("second")

  return (
    <div>
      <Head>
        <title>Test Example</title>
        <meta name="description" content="Test Example Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen">
        <div className="sticky top-0 z-10 bg-white dark:bg-neutral-900 border dark:border-neutral-800 shadow-sm">
        {/* <div className="sticky top-0 z-10 bg-opacity-40 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-900 backdrop-filter backdrop-blur"> */}
          <nav className="flex items-center gap-x-4 p-4 max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Components</a>
            </Link>
            <Link href="/native">
              <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Native</a>
            </Link>
            <Link href="/example">
              <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Example</a>
            </Link>
            {darkMode ?
              <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
              :
              <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
            }
          </nav>
        </div>

        <BackToTop />

        <div className="max-w-2xl mx-auto p-4">

          <h1 data-testid="heading" className="text-3xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-8 mt-4">
            Jest DOM
            <a href="https://github.com/testing-library/jest-dom" className="text-sky-600 hover:text-sky-700 transition-all text-sm pl-4" target="_blank" rel="noreferrer">Docs</a>
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3">
            <div>
              <a href="#toBeDisabled" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeDisabled
              </a>
              <a href="#toBeEmptyDOMElement" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeEmptyDOMElement
              </a>
              <a href="#toBeInTheDocument" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeInTheDocument
              </a>
              <a href="#toBeRequired" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeRequired
              </a>
              <a href="#toBeValid" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeValid
              </a>
              <a href="#toBeInvalid" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeInvalid
              </a>
            </div>
            <div>
              <a href="#toBeVisible" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeVisible
              </a>
              <a href="#toContainElement" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toContainElement
              </a>
              <a href="#toHaveAccessibleDescription" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveAccessibleDescription
              </a>
              <a href="#toHaveAccessibleName" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveAccessibleName
              </a>
              <a href="#toHaveAttribute" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveAttribute
              </a>
              <a href="#toHaveClass" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveClass
              </a>
            </div>
            <div>
              <a href="#toHaveFocus" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveFocus
              </a>
              <a href="#toHaveFormValues" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveFormValues
              </a>
              <a href="#toHaveTextContent" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveTextContent
              </a>
              <a href="#toHaveValue" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveValue
              </a>
              <a href="#toHaveDisplayValue" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveDisplayValue
              </a>
              <a href="#toBeChecked" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeChecked
              </a>
            </div>
          </div>

          {/* Test toBeDisabled */}
          <TestWrapper title="toBeDisabled" description="This allows you to check whether an element is disabled from the user's perspective. According to the specification, the following elements can be disabled: button, input, select, textarea, optgroup, option, fieldset, and custom elements.
This custom matcher considers an element as disabled if the element is among the types of elements that can be disabled (listed above), and the disabled attribute is present. It will also consider the element as disabled if it's inside a parent form element that supports being disabled and has the disabled attribute present.">
            <button data-testid="button-native-disabled" onClick={() => alert("Button Native Clicked")} type="submit" disabled
              className="block mt-4 rounded text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-blue-500 hover:bg-blue-600 cursor-not-allowed">
              Button Native Disabled
            </button>
            <input type="text" data-testid="input-native-disabled" placeholder='Input Native Disabled' disabled className={`${inputClassName} cursor-not-allowed`} />
            <a data-testid="link-toBeDisabled" href="#" disabled className="my-2 text-blue-500 hover:text-blue-600 transition-all block">link</a>
            <Code lang='html'
              code={`<button data-testid="button-native-disabled" type="submit" disabled>
  Button Native Disabled
</button>
<input type="text" data-testid="input-native-disabled" placeholder='Input Native Disabled' disabled />
<a data-testid="link-toBeDisabled" href="#" disabled>link</a>`}
            />
            <Code
              code={`test('Test toBeDisabled', () => {
  render(<Native />)
  const button = screen.getByTestId('button-native-disabled')
  const input = screen.getByTestId('input-native-disabled')
  const aTag = screen.getByTestId('link-toBeDisabled')
  expect(button).toBeDisabled()
  expect(input).toBeDisabled()
  expect(aTag).not.toBeDisabled()
})`}
            />
          </TestWrapper>

          {/* Test toBeEmptyDOMElement */}
          <TestWrapper title="toBeEmptyDOMElement" description="This allows you to assert whether an element has no visible content for the user. It ignores comments but will fail if the element contains white-space.">
            <span data-testid="not-empty">
              <span data-testid="empty"></span>
            </span>
            <span data-testid="with-whitespace"> </span>
            <span data-testid="with-comment">{/* comment */}</span>
            <Code lang='html'
              code={`<span data-testid="not-empty">
  <span data-testid="empty"></span>
</span>
<span data-testid="with-whitespace"> </span>
<span data-testid="with-comment">{/* comment */}</span>`}
            />
            <Code
              code={`test('Test toBeEmptyDOMElement', () => {
  render(<Native />)
  expect(screen.queryByTestId('empty')).toBeEmptyDOMElement()
  expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
  expect(screen.queryByTestId('with-whitespace')).not.toBeEmptyDOMElement()
})`}
            />
          </TestWrapper>

          {/* Test toBeInTheDocument */}
          <TestWrapper title="toBeInTheDocument" description="This allows you to assert whether an element is present in the document or not.">
            <span data-testid="html-element">
              <span className="dark:text-white text-sm">Html Element</span>
            </span>
            <svg data-testid="svg-element" className="border border-red-500 rounded mt-2"></svg>
            <Code lang='html'
              code={`<span data-testid="html-element">
  <span className="dark:text-white text-sm">Html Element</span>
</span>
<svg data-testid="svg-element" className="border border-red-500 rounded mt-2"></svg>`}
            />
            <Code
              code={`test('Test toBeInTheDocument', () => {
  render(<Native />)
  expect(screen.getByTestId('html-element'),).toBeInTheDocument()
  expect(screen.getByTestId('svg-element')).toBeInTheDocument()
  expect(screen.queryByTestId('does-not-exist'),).not.toBeInTheDocument()
})`}
            />
          </TestWrapper>

          {/* Test toBeRequired */}
          <TestWrapper title="toBeRequired" description={`This allows you to check if a form element is currently required.
An element is required if it is having a required or aria-required="true" attribute.`}>
            <input data-testid="required-input" required className={inputClassName} />
            <input data-testid="aria-required-input" aria-required="true" className={inputClassName} />
            <input data-testid="conflicted-input" required aria-required="false" className={inputClassName} />
            <input data-testid="aria-not-required-input" aria-required="false" className={inputClassName} />
            <input data-testid="optional-input" className={inputClassName} />
            <input data-testid="unsupported-type" type="image" required className={inputClassName} />
            <select data-testid="select" required className={`${inputClassName} hover:cursor-pointer`}>
              <option value="optiona">Option A</option>
              <option value="optionb">Option B</option>
            </select>
            <textarea data-testid="textarea" required className={`h-16 ${inputClassName}`}></textarea>
            <div data-testid="supported-role" role="tree" required className="border border-red-500 h-10 rounded mt-2"></div>
            <div data-testid="supported-role-aria" role="tree" aria-required="true" className="border border-red-500 h-10 rounded mt-2"></div>
            <Code lang='html'
              code={`<input data-testid="required-input" required />
<input data-testid="aria-required-input" aria-required="true" />
<input data-testid="conflicted-input" required aria-required="false" />
<input data-testid="aria-not-required-input" aria-required="false" />
<input data-testid="optional-input" />
<input data-testid="unsupported-type" type="image" required />
<select data-testid="select" required>
  <option value="optiona">Option A</option>
  <option value="optionb">Option B</option>
</select>
<textarea data-testid="textarea" required></textarea>
<div data-testid="supported-role" role="tree" required className="border border-red-500 h-10 rounded mt-2"></div>
<div data-testid="supported-role-aria" role="tree" aria-required="true" className="border border-red-500 h-10 rounded mt-2"></div>
`}
            />
            <Code
              code={`test('Test toBeRequired', () => {
  render(<Native />)
  expect(screen.getByTestId('required-input')).toBeRequired()
  expect(screen.getByTestId('aria-required-input')).toBeRequired()
  expect(screen.getByTestId('conflicted-input')).toBeRequired()
  expect(screen.getByTestId('aria-not-required-input')).not.toBeRequired()
  expect(screen.getByTestId('optional-input')).not.toBeRequired()
  expect(screen.getByTestId('unsupported-type')).not.toBeRequired()
  expect(screen.getByTestId('select')).toBeRequired()
  expect(screen.getByTestId('textarea')).toBeRequired()
  expect(screen.getByTestId('supported-role')).not.toBeRequired()
  expect(screen.getByTestId('supported-role-aria')).toBeRequired()
})`}
            />
          </TestWrapper>

          {/* Test toBeValid */}
          <TestWrapper title="toBeValid" description={`This allows you to check if the value of an element, is currently valid.
An element is valid if it has no aria-invalid attributes or an attribute value of "false". The result of checkValidity() must also be true if it's a form element.`}>
            <input data-testid="no-aria-invalidd" className={inputClassName} />
            <input data-testid="aria-invalidd" aria-invalid className={inputClassName} />
            <input data-testid="aria-invalid-valuee" aria-invalid="true" className={inputClassName} />
            <input data-testid="aria-invalid-falsee" aria-invalid="false" className={inputClassName} />
            <form data-testid="valid-formm">
              <input className={inputClassName} />
            </form>
            <form data-testid="invalid-formm">
              <input required className={inputClassName} />
            </form>
            <Code lang='html'
              code={`<input data-testid="no-aria-invalidd" />
<input data-testid="aria-invalidd" aria-invalid />
<input data-testid="aria-invalid-valuee" aria-invalid="true" />
<input data-testid="aria-invalid-falsee" aria-invalid="false" />
<form data-testid="valid-formm">
  <input />
</form>
<form data-testid="invalid-formm">
  <input required />
</form>`}
            />
            <Code
              code={`test('Test toBeValid', () => {
  render(<Native />)
  expect(screen.getByTestId('no-aria-invalidd')).toBeValid()
  expect(screen.getByTestId('aria-invalidd')).not.toBeValid()
  expect(screen.getByTestId('aria-invalid-valuee')).not.toBeValid()
  expect(screen.getByTestId('aria-invalid-falsee')).toBeValid()
  expect(screen.getByTestId('valid-formm')).toBeValid()
  expect(screen.getByTestId('invalid-formm')).not.toBeValid()
})`}
            />
          </TestWrapper>

          {/* Test toBeInvalid */}
          <TestWrapper title="toBeInvalid" description="This allows you to check if an element, is currently invalid.
An element is invalid if it has an aria-invalid attribute with no value or a value of true, or if the result of checkValidity() is false.
          Examples">
            <input data-testid="no-aria-invalid" className={inputClassName} />
            <input data-testid="aria-invalid" aria-invalid className={inputClassName} />
            <input data-testid="aria-invalid-value" aria-invalid="true" className={inputClassName} />
            <input data-testid="aria-invalid-false" aria-invalid="false" className={inputClassName} />
            <form data-testid="valid-form">
              <input className={inputClassName} />
            </form>
            <form data-testid="invalid-form">
              <input required className={inputClassName} />
            </form>
            <Code lang='html'
              code={`<input data-testid="no-aria-invalid" />
<input data-testid="aria-invalid" aria-invalid />
<input data-testid="aria-invalid-value" aria-invalid="true" />
<input data-testid="aria-invalid-false" aria-invalid="false" />
<form data-testid="valid-form">
  <input />
</form>
<form data-testid="invalid-form">
  <input required />
</form>`}
            />
            <Code
              code={`test('Test toBeInvalid', () => {
  render(<Native />)
  expect(screen.getByTestId('no-aria-invalid')).not.toBeInvalid()
  expect(screen.getByTestId('aria-invalid')).toBeInvalid()
  expect(screen.getByTestId('aria-invalid-value')).toBeInvalid()
  expect(screen.getByTestId('aria-invalid-false')).not.toBeInvalid()
  expect(screen.getByTestId('valid-form')).not.toBeInvalid()
  expect(screen.getByTestId('invalid-form')).toBeInvalid()
})`}
            />
          </TestWrapper>

          {/* Test toBeVisible */}
          <TestWrapper title="toBeVisible" description={`This allows you to check if an element is currently visible to the user.
An element is visible if all the following conditions are met: `}
            list={
              <>
                <TestWrapper.list>it is present in the document</TestWrapper.list>
                <TestWrapper.list>it does not have its css property display set to none</TestWrapper.list>
                <TestWrapper.list>it does not have its css property visibility set to either hidden or collapse</TestWrapper.list>
                <TestWrapper.list>it does not have its css property opacity set to 0</TestWrapper.list>
                <TestWrapper.list>its parent element is also visible (and so on up to the top of the DOM tree)</TestWrapper.list>
                <TestWrapper.list>it does not have the hidden attribute</TestWrapper.list>
                <TestWrapper.list>if details it has the open attribute</TestWrapper.list>
              </>
            }
          >
            <div data-testid="zero-opacity" style={{ opacity: 0 }}>Zero Opacity Example</div>
            <div data-testid="visibility-hidden" style={{ visibility: 'hidden' }}>
              Visibility Hidden Example
            </div>
            <div data-testid="display-none" style={{ display: 'none' }}>Display None Example</div>
            <div style={{ opacity: 0 }}>
              <span data-testid="hidden-parent">Hidden Parent Example</span>
            </div>
            <div data-testid="visible" className="text-sm dark:text-white my-4">Visible Example</div>
            <div data-testid="hidden-attribute" hidden className="text-sm dark:text-white">Hidden Attribute Example</div>
            <details data-testid="hidden-details" className="text-sm dark:text-white my-4">
              <summary>Title of hidden text</summary>
              Hidden Details Example
            </details>
            <details data-testid="visible-details" open className="text-sm dark:text-white my-4">
              <summary>Title of visible text</summary>
              <div>Visible Details Example</div>
            </details>
            <Code lang='html'
              code={`<div data-testid="zero-opacity" style={{ opacity: 0 }}>Zero Opacity Example</div>
<div data-testid="visibility-hidden" style={{ visibility: 'hidden' }}>
  Visibility Hidden Example
</div>
<div data-testid="display-none" style={{ display: 'none' }}>Display None Example</div>
<div style={{ opacity: 0 }}>
  <span data-testid="hidden-parent">Hidden Parent Example</span>
</div>
<div data-testid="visible">Visible Example</div>
<div data-testid="hidden-attribute" hidden>Hidden Attribute Example</div>
<details data-testid="hidden-details">
  <summary>Title of hidden text</summary>
  Hidden Details Example
</details>
<details data-testid="visible-details" open>
  <summary>Title of visible text</summary>
  <div>Visible Details Example</div>
</details>`}
            />
            <Code
              code={`test('Test toBeVisible', () => {
  render(<Native />)
  expect(screen.getByTestId('zero-opacity')).not.toBeVisible()
  expect(screen.getByTestId('visibility-hidden')).not.toBeVisible()
  expect(screen.getByTestId('display-none')).not.toBeVisible()
  expect(screen.getByTestId('hidden-parent')).not.toBeVisible()
  expect(screen.getByTestId('visible')).toBeVisible()
  expect(screen.getByTestId('hidden-attribute')).not.toBeVisible()
  expect(screen.getByTestId('hidden-details')).not.toBeVisible()
  expect(screen.getByTestId('visible-details')).toBeVisible()
})`}
            />
          </TestWrapper>

          {/* Test toContainElement */}
          <TestWrapper title="toContainElement" description={`This allows you to assert whether an element contains another element as a descendant or not.`}>
            <span data-testid="ancestor">
              <span data-testid="descendant"></span>
            </span>
            <Code lang='html'
              code={`<span data-testid="ancestor">
  <span data-testid="descendant"></span>
</span>`}
            />
            <Code
              code={`test('Test toContainElement', () => {
  render(<Native />)
  const ancestor = screen.getByTestId('ancestor')
  const descendant = screen.getByTestId('descendant')
  expect(ancestor).toContainElement(descendant)
  expect(descendant).not.toContainElement(ancestor)
})`}
            />
          </TestWrapper>

          {/* Test toHaveAccessibleDescription */}
          <TestWrapper title="toHaveAccessibleDescription" description={`This allows you to assert that an element has the expected accessible description.`}>
            <a data-testid="link" href="#" aria-label="Home page" title="A link to start over" className="text-sm underline block text-blue-500 my-2">Link to Start</a>
            <a data-testid="extra-link" href="#" aria-label="About page" className="text-sm underline block text-blue-500 my-2">Link to About</a>
            <img src="favicon.ico" data-testid="avatar" alt="User profile pic" className="h-20 w-20 my-2" />
            <img src="favicon.ico" data-testid="logo" alt="Company logo" aria-describedby="t1" className="h-20 w-20" />
            <span id="t1" role="presentation" className="dark:text-white text-xs">The logo of Our Company</span>
            <Code lang='html'
              code={`<a data-testid="link" href="#" aria-label="Home page" title="A link to start over">Link to Start</a>
<a data-testid="extra-link" href="#" aria-label="About page">Link to About</a>
<img src="favicon.ico" data-testid="avatar" alt="User profile pic" />
<img src="favicon.ico" data-testid="logo" alt="Company logo" aria-describedby="t1" />
<span id="t1" role="presentation">The logo of Our Company</span>`}
            />
            <Code
              code={`test('Test toHaveAccessibleDescription', () => {
  render(<Native />)
  expect(screen.getByTestId('link')).toHaveAccessibleDescription()
  expect(screen.getByTestId('link')).toHaveAccessibleDescription('A link to start over')
  expect(screen.getByTestId('link')).not.toHaveAccessibleDescription('Home page')
  expect(screen.getByTestId('extra-link')).not.toHaveAccessibleDescription()
  expect(screen.getByTestId('avatar')).not.toHaveAccessibleDescription()
  expect(screen.getByTestId('logo')).not.toHaveAccessibleDescription('Company logo')
  expect(screen.getByTestId('logo')).toHaveAccessibleDescription(
    'The logo of Our Company',
  )
})`}
            />
          </TestWrapper>

          {/* Test toHaveAccessibleName */}
          <TestWrapper title="toHaveAccessibleName" description={`This allows you to assert that an element has the expected accessible name. It is useful, for instance, to assert that form elements and buttons are properly labelled.`}>
            <img data-testid="img-alt" src="favicon.ico" alt="Test alt" className="h-20 w-20 my-2" />
            <img data-testid="img-empty-alt" src="favicon.ico" alt="" className="h-20 w-20 my-2" />
            <svg data-testid="svg-title" className="border border-red-500 rounded">
              <title>Test title</title>
            </svg>
            <button data-testid="button-img-alt">
              <img src="favicon.ico" alt="Test" className="h-20 w-20 my-2" />
            </button>
            <p className="dark:text-white text-sm mb-4">
              <img data-testid="img-paragraph" src="favicon.ico" alt="" className="h-20 w-20 my-2" />
              Test content
            </p>
            <button data-testid="svg-button" className="border rounded p-4">
              <svg className="border border-red-500 rounded p-4">
                <title>Test</title>
              </svg>
            </button>
            <div className="my-4">
              <svg data-testid="svg-without-title" className="border border-red-500 rounded"></svg>
            </div>
            <input data-testid="input-title" title="test" className={inputClassName} />
            <Code lang='html'
              code={`<img data-testid="img-alt" src="favicon.ico" alt="Test alt" className="h-20 w-20 my-2" />
<img data-testid="img-empty-alt" src="favicon.ico" alt="" className="h-20 w-20 my-2" />
<svg data-testid="svg-title" className="border border-red-500 rounded">
  <title>Test title</title>
</svg>
<button data-testid="button-img-alt">
  <img src="favicon.ico" alt="Test" className="h-20 w-20 my-2" />
</button>
<p className="dark:text-white text-sm mb-4">
  <img data-testid="img-paragraph" src="favicon.ico" alt="" className="h-20 w-20 my-2" />
  Test content
</p>
<button data-testid="svg-button" className="border rounded p-4">
  <svg className="border border-red-500 rounded p-4">
    <title>Test</title>
  </svg>
</button>
<div className="my-4">
  <svg data-testid="svg-without-title" className="border border-red-500 rounded"></svg>
</div>
<input data-testid="input-title" title="test" className={inputClassName} />`}
            />
            <Code
              code={`test('Test toHaveAccessibleName', () => {
  render(<Native />)
  expect(screen.getByTestId('img-alt')).toHaveAccessibleName('Test alt')
  expect(screen.getByTestId('img-empty-alt')).not.toHaveAccessibleName()
  expect(screen.getByTestId('svg-title')).toHaveAccessibleName('Test title')
  expect(screen.getByTestId('button-img-alt')).toHaveAccessibleName()
  expect(screen.getByTestId('img-paragraph')).not.toHaveAccessibleName()
  expect(screen.getByTestId('svg-button')).toHaveAccessibleName()
  expect(screen.getByTestId('svg-without-title')).not.toHaveAccessibleName()
  expect(screen.getByTestId('input-title')).toHaveAccessibleName()
})`}
            />
          </TestWrapper>

          {/* Test toHaveAttribute */}
          <TestWrapper title="toHaveAttribute" description={`This allows you to check whether the given element has an attribute or not.`}>
            <button data-testid="ok-button" type="submit" disabled className={buttonClassName}>
              Ok Button
            </button>
            <Code lang='html'
              code={`<button data-testid="ok-button" type="submit" disabled>
  Ok Button
</button>`}
            />
            <Code
              code={`test('Test toHaveAttribute', () => {
  render(<Native />)
  const button = screen.getByTestId('ok-button')
  expect(button).toHaveAttribute('disabled')
  expect(button).toHaveAttribute('type', 'submit')
  expect(button).not.toHaveAttribute('type', 'button')
  expect(button).toHaveAttribute('type', expect.stringContaining('sub'))
  expect(button).toHaveAttribute('type', expect.not.stringContaining('but'))
})`}
            />
          </TestWrapper>

          {/* Test toHaveClass */}
          <TestWrapper title="toHaveClass" description={`This allows you to check whether the given element has certain classes within its class attribute.
You must provide at least one class, unless you are asserting that an element does not have any classes.`}>
            <button data-testid="delete-button" className={`btn extra btn-danger text-sm text-white py-1 px-2 block rounded my-3 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all`}>
              Delete item
            </button>
            <button data-testid="no-classes">No Classes</button>
            <Code lang='html'
              code={`<button data-testid="delete-button" className="btn extra btn-danger">
  Delete item
</button>
<button data-testid="no-classes">No Classes</button>`}
            />
            <Code
              code={`test('Test toHaveClass', () => {
  render(<Native />)
  const deleteButton = screen.getByTestId('delete-button')
  const noClasses = screen.getByTestId('no-classes')
  expect(deleteButton).toHaveClass('extra')
  expect(deleteButton).toHaveClass('btn-danger btn')
  expect(deleteButton).toHaveClass('btn-danger', 'btn')
  expect(deleteButton).not.toHaveClass('btn-link')
  // to check if the element has EXACTLY a set of classes
  expect(deleteButton).toHaveClass('btn extra btn-danger text-sm text-white py-1 px-2 block rounded my-3 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all', { exact: true })
  // if it has more than expected it is going to fail
  expect(deleteButton).not.toHaveClass('btn-danger extra', { exact: true })
  expect(noClasses).not.toHaveClass()
})`}
            />
          </TestWrapper>

          {/* Test toHaveFocus */}
          <TestWrapper title="toHaveFocus" description={`This allows you to assert whether an element has focus or not.`}>
            <div>
              <input type="text" data-testid="element-to-focus" className={inputClassName} />
            </div>
            <Code lang='html'
              code={`<div>
  <input type="text" data-testid="element-to-focus" />
</div>`}
            />
            <Code
              code={`test('Test toHaveFocus', () => {
  render(<Native />)
  const input = screen.getByTestId('element-to-focus')
  input.focus()
  expect(input).toHaveFocus()
  input.blur()
  expect(input).not.toHaveFocus()
})`}
            />
          </TestWrapper>

          {/* Test toHaveFormValues */}
          <TestWrapper title="toHaveFormValues" description={`This allows you to check if a form or fieldset contains form controls for each given name, and having the specified value.`}>
            <form data-testid="login-form">
              <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} className={inputClassName} />
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClassName} />
              <input type="checkbox" name="rememberMe" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="mt-2 text-sm dark:text-white pl-4 dark:checked:bg-blue-500" />
              <button type="submit" onClick={(e) => e.preventDefault()} className={buttonClassName}>Sign in</button>
            </form>
            <Code lang='html'
              code={`<form data-testid="login-form">
  <input type="text" name="username" value="john.doe" />
  <input type="password" name="password" value='12345678' />
  <input type="checkbox" name="rememberMe" checked="true"  />
  <button type="submit">Sign in</button>
</form>`}
            />
            <Code
              code={`test('Test toHaveFormValues', () => {
  render(<Native />)
  expect(screen.getByTestId('login-form')).toHaveFormValues({
    username: 'john.doe',
    password: '12345678',
    rememberMe: true,
  })
})`}
            />
          </TestWrapper>

          {/* Test toHaveTextContent */}
          <TestWrapper title="toHaveTextContent" description={`This allows you to check whether the given node has a text content or not. This supports elements, but also text nodes and fragments.
When a string argument is passed through, it will perform a partial case-sensitive match to the node content.
To perform a case-insensitive match, you can use a RegExp with the /i modifier.
If you want to match the whole content, you can use a RegExp to do it.`}>
            <span data-testid="text-content" className="dark:text-white">Text Content</span>
            <Code lang='html'
              code={`<span data-testid="text-content" className="dark:text-white">Text Content</span>`}
            />
            <Code
              code={`test('Test toHaveTextContent', () => {
  render(<Native />)
  const element = screen.getByTestId('text-content')
  expect(element).toHaveTextContent('Content')
  // to match the whole content
  expect(element).toHaveTextContent(/^Text Content$/)
  // to use case-insensitive match
  expect(element).toHaveTextContent(/content$/i)
  expect(element).not.toHaveTextContent('content')
})`}
            />
          </TestWrapper>

          {/* Test toHaveValue */}
          <TestWrapper title="toHaveValue" description={`This allows you to check whether the given form element has the specified value. It accepts <input>, <select> and <textarea> elements with the exception of <input type="checkbox"> and <input type="radio">, which can be meaningfully matched only using toBeChecked or toHaveFormValues.
For all other form elements, the value is matched using the same algorithm as in toHaveFormValues does.`}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} data-testid="input-text" className={inputClassName} />
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} data-testid="input-number" className={inputClassName} />
            <input type="text" data-testid="input-empty" className={inputClassName} />
            <select data-testid="select-number" value={select} onChange={(e) => setSelect(e.target.value)} className={inputClassName}>
              <option value="first">First Value</option>
              <option value="second">Second Value</option>
              <option value="third">Third Value</option>
            </select>
            <Code lang='html'
              code={`<input type="text" value="text" data-testid="input-text" />
<input type="number" value=5 data-testid="input-number" />
<input type="text" data-testid="input-empty" />
<select data-testid="select-number" value="second">
  <option value="first">First Value</option>
  <option value="second">Second Value</option>
  <option value="third">Third Value</option>
</select>`}
            />
            <Code
              code={`test('Test toHaveValue', () => {
  render(<Native />)
  const textInput = screen.getByTestId('input-text')
  const numberInput = screen.getByTestId('input-number')
  const emptyInput = screen.getByTestId('input-empty')
  const selectInput = screen.getByTestId('select-number')
  expect(textInput).toHaveValue('text')
  expect(numberInput).toHaveValue(5)
  expect(emptyInput).not.toHaveValue()
  expect(selectInput).toHaveValue('second')
})`}
            />
          </TestWrapper>

          {/* Test toHaveDisplayValue */}
          <TestWrapper title="toHaveDisplayValue" description={`This allows you to check whether the given form element has the specified displayed value (the one the end user will see). It accepts <input>, <select> and <textarea> elements with the exception of <input type="checkbox"> and <input type="radio">, which can be meaningfully matched only using toBeChecked or toHaveFormValues.`}>
            <label htmlFor="input-example" className="text-sm dark:text-white block mt-4">First name</label>
            <input type="text" id="input-example" value={text} onChange={(e) => setText(e.target.value)} className={inputClassName} />
            <label htmlFor="textarea-example" className="text-sm dark:text-white block mt-4">Description</label>
            <textarea id="textarea-example" value={text} onChange={(e) => setText(e.target.value)} className={`h-16 ${inputClassName}`} />
            <Code lang='html'
              code={`<label htmlFor="input-example">First name</label>
<input type="text" id="input-example" value="text" />
<label htmlFor="textarea-example">Description</label>
<textarea id="textarea-example" value="text" />`}
            />
            <Code
              code={`test('Test toHaveDisplayValue', () => {
  render(<Native />)
  const input = screen.getByLabelText('First name')
  const textarea = screen.getByLabelText('Description')
  expect(input).toHaveDisplayValue('text')
  expect(input).toHaveDisplayValue(/tex/)
  expect(textarea).toHaveDisplayValue('text')
  expect(textarea).toHaveDisplayValue(/tex/)
})`}
            />
          </TestWrapper>

          {/* Test toBeChecked */}
          <TestWrapper title="toBeChecked" description={`This allows you to check whether the given element is checked. It accepts an input of type checkbox or radio and elements with a role of checkbox, radio or switch with a valid aria-checked attribute of "true" or "false".`}>
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} data-testid="input-checkbox-checked" className="block my-2" />
            <input type="checkbox" data-testid="input-checkbox-unchecked" className="block my-2" />
            <input type="radio" checked={checked} onChange={(e) => setChecked(e.target.checked)} value="foo" data-testid="input-radio-checked" className="block my-2" />
            <input type="radio" value="foo" data-testid="input-radio-unchecked" className="block my-2" />
            <Code lang='html'
              code={`<input type="checkbox" checked=true data-testid="input-checkbox-checked" />
<input type="checkbox" data-testid="input-checkbox-unchecked" />
<input type="radio" checked=true value="foo" data-testid="input-radio-checked" />
<input type="radio" value="foo" data-testid="input-radio-unchecked" />`}
            />
            <Code
              code={`test('Test toBeChecked', () => {
  render(<Native />)
  const inputCheckboxChecked = screen.getByTestId('input-checkbox-checked')
  const inputCheckboxUnchecked = screen.getByTestId('input-checkbox-unchecked')
  expect(inputCheckboxChecked).toBeChecked()
  expect(inputCheckboxUnchecked).not.toBeChecked()

  const inputRadioChecked = screen.getByTestId('input-radio-checked')
  const inputRadioUnchecked = screen.getByTestId('input-radio-unchecked')
  expect(inputRadioChecked).toBeChecked()
  expect(inputRadioUnchecked).not.toBeChecked()
})`}
            />
          </TestWrapper>

        </div>
      </main>
    </div>
  )
}
