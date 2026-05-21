# HTTP Request (PSR-7)

- - -

!!! info "NOTE"

    The HTTP Request component has been removed from v5 to remove the dependency on PSR. They will be introduced in a future version either as pure Phalcon implementations with proxy (PSR enabled) classes or in v6 (PHP implementation).

## Exceptions

The framework still ships the legacy `Phalcon\Http\Request` and `Phalcon\Http\Cookie` services used by the MVC stack.
Any exception thrown by them will be of type `Phalcon\Http\Request\Exception` or `Phalcon\Http\Cookie\Exception`
respectively.

### Granular Exceptions

As of 5.13.1 these components raise granular subclasses so callers can catch a specific failure mode. Existing
`catch (Phalcon\Http\Request\Exception $e)` / `catch (Phalcon\Http\Cookie\Exception $e)` blocks continue to work
unchanged.

| Class                                                      | Parent                           | Thrown when                                                                           |
|------------------------------------------------------------|----------------------------------|---------------------------------------------------------------------------------------|
| `Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort`         | `Phalcon\Http\Cookie\Exception`  | The crypt key supplied to a signed cookie is shorter than the minimum required.       |
| `Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired`    | `Phalcon\Http\Cookie\Exception`  | A signed cookie is used without a `CryptInterface` implementation.                    |
| `Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable`   | `Phalcon\Http\Cookie\Exception`  | The component needs the `crypt` service but the DI container has none.                |
| `Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable`  | `Phalcon\Http\Cookie\Exception`  | A cookie value needs sanitization but the DI container has no `filter` service.       |
| `Phalcon\Http\Request\Exceptions\FilterServiceUnavailable` | `Phalcon\Http\Request\Exception` | A request value needs sanitization but the DI container has no `filter` service.      |
| `Phalcon\Http\Request\Exceptions\InvalidHost`              | `Phalcon\Http\Request\Exception` | The configured trusted-hosts policy rejects the `Host` header on the current request. |
| `Phalcon\Http\Request\Exceptions\InvalidHttpMethod`        | `Phalcon\Http\Request\Exception` | A method override sets an HTTP method that is not in the allow-list.                  |
| `Phalcon\Http\Request\Exceptions\MissingFilters`           | `Phalcon\Http\Request\Exception` | A request helper is given a filter argument but no filter names.                      |
| `Phalcon\Http\Request\Exceptions\SanitizerNotFound`        | `Phalcon\Http\Request\Exception` | A sanitizer referenced by name is not registered in the filter service.               |
