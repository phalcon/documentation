---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Auth\AbstractAuthDispatcherListener ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/AbstractAuthDispatcherListener.zep)


-   __Namespace__

    - `Phalcon\Auth`

-   __Uses__
    
    - `Phalcon\Auth\Exceptions\AccessDenied`
    - `Phalcon\Contracts\Auth\Manager`

-   __Extends__
    

-   __Implements__
    

Shared enforcement algorithm for the Cli and Mvc auth dispatcher
listeners. The dispatcher-specific subclass provides only the action
name from its typed dispatcher, the action-kind label used in the
access-denied exception, and (Mvc only) a forward handler for
Access::redirectTo().


### Properties
```php
/**
 * @var Manager
 */
protected $manager;

```

### Methods

```php
public function __construct( Manager $manager );
```



```php
protected function enforce( string $actionName, mixed $forwardHandler = null ): bool;
```
Runs the access check for the given action name. Returns true when
the dispatch should proceed, false when a forward was issued, and
throws when access is denied without a redirect target.

@phpstan-param callable|null $forwardHandler

@throws Exception


```php
abstract protected function getActionType(): string;
```
Returns the kind label used by AccessDenied (e.g. 'task',
'action').




## Auth\Access\AbstractAccess ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/AbstractAccess.zep)


-   __Namespace__

    - `Phalcon\Auth\Access`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Access\Access`
    - `Phalcon\Contracts\Auth\Manager`

-   __Extends__
    

-   __Implements__
    
    - `Access`

@phpstan-import-type ForwardTarget from Access


### Properties
```php
/**
 * @var array
 */
protected $exceptActions;

/**
 * @var Manager
 */
protected $manager;

/**
 * @var array
 */
protected $onlyActions;

```

### Methods

```php
public function __construct( Manager $manager );
```



```php
public function getExceptActions(): array;
```
@phpstan-return list<string>


```php
public function getOnlyActions(): array;
```
@phpstan-return list<string>


```php
public function isAllowed( string $actionName ): bool;
```



```php
public function redirectTo(): array | null;
```
@phpstan-return ForwardTarget|null


```php
public function setExceptActions( array $exceptActions = [] ): void;
```



```php
public function setOnlyActions( array $onlyActions = [] ): void;
```





## Auth\Access\AccessLocator 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/AccessLocator.zep)


-   __Namespace__

    - `Phalcon\Auth\Access`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Access\Access`
    - `Phalcon\Support\AbstractLocator`

-   __Extends__
    
    `AbstractLocator`

-   __Implements__
    

Service locator for Phalcon\Auth access gates. Utilizes the container to
obtain the service. For the Phalcon\Container\Container one can use
autowiring. For the Phalcon\Di\Di, one needs to register the gates in it
to be used here.

@extends AbstractLocator<Access>



### Methods

```php
protected function getExceptionClass(): string;
```



```php
protected function getInterfaceClass(): string;
```



```php
protected function getServices(): array;
```





## Auth\Access\Auth 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/Auth.zep)


-   __Namespace__

    - `Phalcon\Auth\Access`

-   __Uses__
    

-   __Extends__
    
    `AbstractAccess`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth


### Methods

```php
public function allowedIf(): bool;
```





## Auth\Access\Guest 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/Guest.zep)


-   __Namespace__

    - `Phalcon\Auth\Access`

-   __Uses__
    

-   __Extends__
    
    `AbstractAccess`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth


### Methods

```php
public function allowedIf(): bool;
```





## Auth\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Adapter\Adapter`
    - `Phalcon\Contracts\Auth\Adapter\AdapterConfig`
    - `Phalcon\Contracts\Auth\AuthUser`
    - `Phalcon\Contracts\Encryption\Security\Security`

-   __Extends__
    

-   __Implements__
    
    - `Adapter`

@phpstan-import-type AuthCredentials from Adapter

@template TConfig of AdapterConfig


### Properties
```php
/**
 * @var AdapterConfig
 */
protected $config;

/**
 * @var Security
 */
protected $hasher;

```

### Methods

```php
public function __construct( Security $hasher, AdapterConfig $config );
```
@phpstan-param TConfig $config


```php
public function getConfig(): AdapterConfig;
```
Returns the adapter configuration object.

@phpstan-return TConfig


```php
public function getModel(): string | null;
```
Returns the model class name, if configured.


```php
public function validateCredentials( AuthUser $user, array $credentials ): bool;
```
Validates the supplied plaintext password against the user's stored hash.
Concrete adapters share this implementation; if your data source needs
a different verification strategy, override it.

@phpstan-param AuthCredentials $credentials




## Auth\Adapter\AbstractArrayAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/AbstractArrayAdapter.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter`

-   __Uses__
    
    - `Phalcon\Auth\AuthUser`
    - `Phalcon\Contracts\Auth\Adapter\AdapterConfig`
    - `Phalcon\Contracts\Auth\AuthUser`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Common base for adapters whose user records come from an in-memory list
(Memory and Stream). Subclasses provide the row source via loadUsers();
everything else — credentials matching, hydration, the empty-credentials
guard, and a default linear retrieveById — is shared here.

@phpstan-import-type AuthCredentials from \Phalcon\Contracts\Auth\Adapter\Adapter
@phpstan-type AuthUserRow array{id?: int|string}&array<string, mixed>

@template TConfig of AdapterConfig
@extends AbstractAdapter<TConfig>


### Methods

```php
public function retrieveByCredentials( array $credentials ): AuthUserContract | null;
```
Walks the user list and returns the first row whose non-'password'
keys all match strictly. Returns null when no row matches or when
$credentials carries no identifying field at all (only 'password',
or empty) — protects callers from the silent "first row wins" footgun.

@phpstan-param AuthCredentials $credentials


```php
public function retrieveById( mixed $id ): AuthUserContract | null;
```
Default linear-scan implementation. Memory overrides this for an O(1)
id-keyed lookup; Stream uses this as-is.


```php
protected function hasIdentifyingField( array $credentials ): bool;
```
Tests whether a credentials payload carries at least one identifying
field (i.e. anything other than 'password'). An empty payload — or a
payload that only contains 'password' — is treated as "no lookup".

@phpstan-param AuthCredentials $credentials


```php
protected function hydrate( array $row ): AuthUserContract;
```
Hydrates a raw user row into either the configured model class or a
Phalcon\Auth\AuthUser value object.

@phpstan-param AuthUserRow $row


```php
abstract protected function loadUsers(): array;
```
Returns the source list of user rows. Concrete subclasses decide
where they come from (config array, JSON file, etc.).

@phpstan-return list<AuthUserRow>


```php
protected function matchesRow( array $row, array $credentials ): bool;
```
Strict per-key match of a row against credentials, skipping 'password'.

@phpstan-param AuthUserRow     $row
@phpstan-param AuthCredentials $credentials




## Auth\Adapter\AdapterLocator 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/AdapterLocator.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Adapter\Adapter`
    - `Phalcon\Support\AbstractLocator`

-   __Extends__
    
    `AbstractLocator`

-   __Implements__
    

Service locator for Phalcon\Auth adapters. Utilizes the container to
obtain the service. For the Phalcon\Container\Container one can use
autowiring. For the Phalcon\Di\Di, one needs to register the gates in it
to be used here.

@extends AbstractLocator<Adapter>



### Methods

```php
protected function getExceptionClass(): string;
```



```php
protected function getInterfaceClass(): string;
```



```php
protected function getServices(): array;
```





## Auth\Adapter\Config\AbstractAdapterConfig ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/AbstractAdapterConfig.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter\Config`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Adapter\AdapterConfig`

-   __Extends__
    

-   __Implements__
    
    - `AdapterConfig`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth


### Properties
```php
/**
 * @var string|null
 */
protected $model;

```

### Methods

```php
public function __construct( string $model = null );
```



```php
public function getModel(): string | null;
```





## Auth\Adapter\Config\MemoryAdapterConfig 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/MemoryAdapterConfig.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter\Config`

-   __Uses__
    

-   __Extends__
    
    `AbstractAdapterConfig`

-   __Implements__
    

@phpstan-type AuthUserRow array{id?: int|string}&array<string, mixed>


### Properties
```php
/**
 * @var array
 */
protected $users;

```

### Methods

```php
public function __construct( array $users = [], string $model = null );
```
@phpstan-param list<AuthUserRow> $users


```php
public function getUsers(): array;
```
@phpstan-return list<AuthUserRow>




## Auth\Adapter\Config\ModelAdapterConfig 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/ModelAdapterConfig.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter\Config`

-   __Uses__
    
    - `Phalcon\Auth\Exception`
    - `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`

-   __Extends__
    
    `AbstractAdapterConfig`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth


### Properties
```php
/**
 * @var string
 */
protected $idColumn = id;

```

### Methods

```php
public function __construct( string $model, string $idColumn = string );
```
@throws Exception


```php
public function getIdColumn(): string;
```



```php
public function getModel(): string;
```





## Auth\Adapter\Config\StreamAdapterConfig 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/StreamAdapterConfig.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter\Config`

-   __Uses__
    
    - `Phalcon\Auth\Exception`
    - `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`

-   __Extends__
    
    `AbstractAdapterConfig`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth


### Properties
```php
/**
 * @var string
 */
protected $file;

```

### Methods

```php
public function __construct( string $file, string $model = null );
```
@throws Exception


```php
public function getFile(): string;
```





## Auth\Adapter\Memory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Memory.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter`

-   __Uses__
    
    - `Phalcon\Auth\Adapter\Config\MemoryAdapterConfig`
    - `Phalcon\Auth\Internal\Options`
    - `Phalcon\Contracts\Auth\AuthUser`
    - `Phalcon\Contracts\Encryption\Security\Security`

-   __Extends__
    
    `AbstractArrayAdapter`

-   __Implements__
    

In-memory adapter — useful for tests and small read-only user lists.

@phpstan-import-type AuthUserRow from AbstractArrayAdapter

@extends AbstractArrayAdapter<MemoryAdapterConfig>


### Properties
```php
/**
 * Map of id => user row for O(1) retrieveById lookup.
 *
 * @phpstan-var array<int|string, AuthUserRow>
 * @var array
 */
private $idStore;

```

### Methods

```php
public function __construct( Security $hasher, MemoryAdapterConfig $config );
```



```php
public static function fromOptions( Security $hasher, array $options ): static;
```



```php
public function retrieveById( mixed $id ): AuthUser | null;
```
Overridden for O(1) lookup via the id index built in the constructor.


```php
protected function loadUsers(): array;
```
@phpstan-return list<AuthUserRow>




## Auth\Adapter\Model 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Model.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter`

-   __Uses__
    
    - `Phalcon\Auth\Adapter\Config\ModelAdapterConfig`
    - `Phalcon\Auth\Exception`
    - `Phalcon\Auth\Exceptions\DoesNotImplement`
    - `Phalcon\Auth\Internal\Options`
    - `Phalcon\Contracts\Auth\Adapter\RememberAdapter`
    - `Phalcon\Contracts\Auth\AuthRemember`
    - `Phalcon\Contracts\Auth\AuthUser`
    - `Phalcon\Contracts\Auth\RememberToken`
    - `Phalcon\Contracts\Encryption\Security\Security`
    - `Phalcon\Mvc\ModelInterface`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    
    - `RememberAdapter`

Phalcon Model-backed adapter.

@phpstan-import-type AuthCredentials from \Phalcon\Contracts\Auth\Adapter\Adapter

@extends AbstractAdapter<ModelAdapterConfig>


### Methods

```php
public function __construct( Security $hasher, ModelAdapterConfig $config );
```



```php
public function createRememberToken( AuthUser $user ): RememberToken;
```
Create and persist a new remember token for the user.

@throws Exception


```php
public static function fromOptions( Security $hasher, array $options ): static;
```



```php
public function retrieveByCredentials( array $credentials ): AuthUser | null;
```
Find a user matching the given credentials (excluding 'password' key).

@phpstan-param AuthCredentials $credentials


```php
public function retrieveById( mixed $id ): AuthUser | null;
```



```php
public function retrieveByToken( mixed $id, string $token, string $userAgent = null ): AuthUser | null;
```
Retrieve a user by the remember-me cookie payload.




## Auth\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Auth\Adapter`

-   __Uses__
    
    - `InvalidArgumentException`
    - `Phalcon\Auth\Adapter\Config\StreamAdapterConfig`
    - `Phalcon\Auth\Exception`
    - `Phalcon\Auth\Exceptions\FileCannotRead`
    - `Phalcon\Auth\Exceptions\FileDoesNotContainJson`
    - `Phalcon\Auth\Exceptions\FileDoesNotExist`
    - `Phalcon\Auth\Exceptions\FileNotValidJson`
    - `Phalcon\Auth\Internal\Options`
    - `Phalcon\Contracts\Encryption\Security\Security`
    - `Phalcon\Support\Helper\Json\Decode`

-   __Extends__
    
    `AbstractArrayAdapter`

-   __Implements__
    

JSON file-backed adapter.

The file must contain a JSON array of user records:
  [{"id":1,"email":"a@b","password":"<hashed>"}, ...]

@phpstan-import-type AuthUserRow from AbstractArrayAdapter

@extends AbstractArrayAdapter<StreamAdapterConfig>


### Methods

```php
public function __construct( Security $hasher, StreamAdapterConfig $config );
```



```php
public static function fromOptions( Security $hasher, array $options ): static;
```



```php
protected function loadUsers(): array;
```
Loads and decodes the JSON users file. Re-read on every call — if you
need caching, wrap it.

@phpstan-return list<AuthUserRow>

@throws Exception


```php
protected function phpFileExists( string $filename ): bool;
```



```php
protected function phpFileGetContents( string $filename );
```





## Auth\AuthUser 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/AuthUser.zep)


-   __Namespace__

    - `Phalcon\Auth`

-   __Uses__
    
    - `Phalcon\Auth\Exceptions\DataMustContainIdKey`
    - `Phalcon\Contracts\Auth\AuthUser`

-   __Extends__
    

-   __Implements__
    
    - `AuthUserContract`

Lightweight value object returned by array-backed adapters (Memory, Stream)
when no application model class is configured.


### Properties
```php
/**
 * @phpstan-var array<string, mixed>
 * @var array
 */
protected $data;

```

### Methods

```php
public function __construct( array $data );
```



```php
public function getAuthIdentifier(): int | string;
```



```php
public function getAuthPassword(): string;
```



```php
public function toArray(): array;
```
Returns the underlying data array.




## Auth\Cli\AuthDispatcherListener 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Cli/AuthDispatcherListener.zep)


-   __Namespace__

    - `Phalcon\Auth\Cli`

-   __Uses__
    
    - `Phalcon\Auth\AbstractAuthDispatcherListener`
    - `Phalcon\Auth\Exception`
    - `Phalcon\Cli\Dispatcher`
    - `Phalcon\Events\Event`

-   __Extends__
    
    `AbstractAuthDispatcherListener`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth


### Methods

```php
public function beforeExecuteRoute( Event $event, Dispatcher $dispatcher ): bool;
```
@throws Exception


```php
protected function getActionType(): string;
```





## Auth\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exception.zep)


-   __Namespace__

    - `Phalcon\Auth`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Auth will use this class



## Auth\Exceptions\AccessDenied 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/AccessDenied.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

Access denied exception


### Methods

```php
public function __construct( string $type, string $name );
```





## Auth\Exceptions\ConfigRequiresNonEmptyValue 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/ConfigRequiresNonEmptyValue.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

Config requires non-empty value


### Methods

```php
public function __construct( string $configName, string $configKey, string $suffix = string );
```





## Auth\Exceptions\DataMustContainIdKey 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/DataMustContainIdKey.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

AuthUser data must contain "id"


### Methods

```php
public function __construct();
```





## Auth\Exceptions\DoesNotImplement 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/DoesNotImplement.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

Does not implement interface


### Methods

```php
public function __construct( string $type, string $name );
```





## Auth\Exceptions\FileCannotRead 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileCannotRead.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

Cannot read file


### Methods

```php
public function __construct( string $path );
```





## Auth\Exceptions\FileDoesNotContainJson 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileDoesNotContainJson.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

File does not contain a JSON array


### Methods

```php
public function __construct( string $path );
```





## Auth\Exceptions\FileDoesNotExist 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileDoesNotExist.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

File does not exist


### Methods

```php
public function __construct( string $path );
```





## Auth\Exceptions\FileNotValidJson 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileNotValidJson.zep)


-   __Namespace__

    - `Phalcon\Auth\Exceptions`

-   __Uses__
    
    - `Phalcon\Auth\Exception`
    - `Throwable`

-   __Extends__
    
    `Exception`

-   __Implements__
    

Not a valid JSON


### Methods

```php
public function __construct( string $path, Throwable $ex );
```





## Auth\Guard\AbstractGuard ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/AbstractGuard.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Adapter\Adapter`
    - `Phalcon\Contracts\Auth\AuthUser`
    - `Phalcon\Contracts\Auth\Guard\Guard`
    - `Phalcon\Contracts\Auth\Guard\GuardConfig`
    - `Phalcon\Events\AbstractEventsAware`

-   __Extends__
    
    `AbstractEventsAware`

-   __Implements__
    
    - `Guard`

@phpstan-import-type AuthCredentials from Adapter

@template TConfig of GuardConfig


### Properties
```php
/**
 * @var Adapter
 */
protected $adapter;

/**
 * @var GuardConfig
 */
protected $config;

/**
 * @var AuthUser | null
 */
protected $lastUserAttempted;

/**
 * @var AuthUser | null
 */
protected $user;

```

### Methods

```php
public function __construct( Adapter $adapter, GuardConfig $config );
```
@phpstan-param TConfig $config


```php
public function check(): bool;
```



```php
public function getAdapter(): Adapter;
```



```php
public function getConfig(): GuardConfig;
```
Returns the guard configuration object.

@phpstan-return TConfig


```php
public function getLastUserAttempted(): AuthUser | null;
```



```php
public function guest(): bool;
```



```php
public function hasUser(): bool;
```



```php
public function id(): int | string | null;
```



```php
public function setAdapter( Adapter $adapter ): static;
```



```php
public function setUser( AuthUser $user ): static;
```



```php
protected function hasValidCredentials( mixed $user, array $credentials ): bool;
```
user should be ?AuthUser
@phpstan-param AuthCredentials $credentials

@phpstan-assert-if-true !null $user




## Auth\Guard\Config\AbstractGuardConfig ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Config/AbstractGuardConfig.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard\Config`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Guard\GuardConfig`

-   __Extends__
    

-   __Implements__
    
    - `GuardConfig`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth



## Auth\Guard\Config\SessionGuardConfig 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Config/SessionGuardConfig.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard\Config`

-   __Uses__
    
    - `Phalcon\Auth\Exception`
    - `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`

-   __Extends__
    
    `AbstractGuardConfig`

-   __Implements__
    

Configuration for the Session guard. Holds the names under which the
session key and remember-me cookie are stored. Defaults to 'auth' and
'remember'; multi-guard apps can pass a $suffix ('web', 'admin', ...)
to derive 'auth_web' / 'remember_web' style names, or override either
full name explicitly.


### Properties
```php
/**
 * @var string
 */
private $name;

/**
 * @var string
 */
private $rememberName;

```

### Methods

```php
public function __construct( string $suffix = null, string $name = null, string $rememberName = null );
```
@throws Exception


```php
public function getName(): string;
```



```php
public function getRememberName(): string;
```





## Auth\Guard\Config\TokenGuardConfig 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Config/TokenGuardConfig.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard\Config`

-   __Uses__
    
    - `Phalcon\Auth\Exception`
    - `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`

-   __Extends__
    
    `AbstractGuardConfig`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth


### Properties
```php
/**
 * @var string
 */
protected $inputKey;

/**
 * @var string
 */
protected $storageKey;

```

### Methods

```php
public function __construct( string $inputKey, string $storageKey );
```
@throws Exception


```php
public function getInputKey(): string;
```



```php
public function getStorageKey(): string;
```





## Auth\Guard\GuardLocator 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/GuardLocator.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard`

-   __Uses__
    
    - `Phalcon\Contracts\Auth\Guard\Guard`
    - `Phalcon\Support\AbstractLocator`

-   __Extends__
    
    `AbstractLocator`

-   __Implements__
    

Service locator for Phalcon\Auth guards. Utilizes the container to obtain
the service. For Phalcon\Container\Container one can use autowiring; for
Phalcon\Di\Di, register the guards in it before resolution.

@extends AbstractLocator<Guard>


### Methods

```php
protected function getExceptionClass(): string;
```



```php
protected function getInterfaceClass(): string;
```



```php
protected function getServices(): array;
```





## Auth\Guard\Session 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Session.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard`

-   __Uses__
    
    - `Phalcon\Auth\Exception`
    - `Phalcon\Auth\Exceptions\DoesNotImplement`
    - `Phalcon\Auth\Guard\Config\SessionGuardConfig`
    - `Phalcon\Auth\Internal\Options`
    - `Phalcon\Contracts\Auth\Adapter\Adapter`
    - `Phalcon\Contracts\Auth\Adapter\RememberAdapter`
    - `Phalcon\Contracts\Auth\AuthRemember`
    - `Phalcon\Contracts\Auth\AuthUser`
    - `Phalcon\Contracts\Auth\Guard\BasicAuth`
    - `Phalcon\Contracts\Auth\Guard\GuardStateful`
    - `Phalcon\Contracts\Auth\RememberToken`
    - `Phalcon\Contracts\Container\Service\Collection`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Http\RequestInterface`
    - `Phalcon\Http\Response\CookiesInterface`
    - `Phalcon\Session\ManagerInterface`
    - `Phalcon\Support\Helper\Json\Encode`

-   __Extends__
    
    `AbstractGuard`

-   __Implements__
    
    - `BasicAuth`
    - `GuardStateful`

@phpstan-import-type AuthCredentials from Adapter

@extends AbstractGuard<SessionGuardConfig>


### Properties
```php
/**
 * @var CookiesInterface
 */
protected $cookies;

/**
 * @var RequestInterface
 */
protected $request;

/**
 * @var SessionManagerInterface
 */
protected $session;

/**
 * @var bool
 */
protected $viaRemember = false;

```

### Methods

```php
public function __construct( Adapter $adapter, RequestInterface $request, CookiesInterface $cookies, SessionManagerInterface $session, SessionGuardConfig $config = null );
```



```php
public function attempt( array $credentials = [], bool $remember = bool ): bool;
```
@phpstan-param AuthCredentials $credentials

@throws Exception


```php
public function basic( string $field = string, array $extraConditions = [] ): bool;
```



```php
public static function fromOptions( Adapter $adapter, mixed $container, array $options ): static;
```



```php
public function getName(): string;
```



```php
public function getRememberName(): string;
```



```php
public function login( AuthUser $user, bool $remember = bool ): void;
```
@throws Exception


```php
public function loginById( mixed $id, bool $remember = bool ): false | AuthUser;
```
@throws Exception


```php
public function logout(): void;
```



```php
public function once( array $credentials = [] ): bool;
```
@phpstan-param AuthCredentials $credentials


```php
public function onceBasic( string $field = string, array $extraConditions = [] ): false | AuthUser;
```



```php
public function user(): AuthUser | null;
```



```php
public function validate( array $credentials = [] ): bool;
```
@phpstan-param AuthCredentials $credentials

@phpstan-assert-if-true !null $this->lastUserAttempted


```php
public function viaRemember(): bool;
```



```php
protected function attemptBasic( string $field, array $extraConditions = [] ): bool;
```



```php
protected function basicCredentials( string $field ): array | null;
```



```php
protected function createRememberToken( AuthUser $user ): RememberToken;
```



```php
protected function recaller(): UserRemember | null;
```



```php
protected function rememberUser( AuthUser $user ): void;
```



```php
protected function userFromRecaller( UserRemember $recaller ): AuthUser | null;
```





## Auth\Guard\Token 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Token.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard`

-   __Uses__
    
    - `Phalcon\Auth\Guard\Config\TokenGuardConfig`
    - `Phalcon\Auth\Internal\Options`
    - `Phalcon\Contracts\Auth\Adapter\Adapter`
    - `Phalcon\Contracts\Auth\AuthUser`
    - `Phalcon\Contracts\Container\Service\Collection`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Http\RequestInterface`

-   __Extends__
    
    `AbstractGuard`

-   __Implements__
    

@phpstan-import-type AuthCredentials from Adapter

@extends AbstractGuard<TokenGuardConfig>


### Properties
```php
/**
 * @var RequestInterface
 */
protected $request;

```

### Methods

```php
public function __construct( Adapter $adapter, RequestInterface $request, TokenGuardConfig $config );
```



```php
public static function fromOptions( Adapter $adapter, mixed $container, array $options ): static;
```



```php
public function getTokenForRequest(): string | null;
```



```php
public function setRequest( RequestInterface $request ): static;
```



```php
public function user(): AuthUser | null;
```



```php
public function validate( array $credentials = [] ): bool;
```
@phpstan-param AuthCredentials $credentials




## Auth\Guard\UserRemember ![Final](../assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/UserRemember.zep)


-   __Namespace__

    - `Phalcon\Auth\Guard`

-   __Uses__
    
    - `InvalidArgumentException`
    - `Phalcon\Support\Helper\Json\Decode`

-   __Extends__
    

-   __Implements__
    

Value object representing the contents of a remember-me cookie.

@phpstan-type RememberPayload array{id?: int|string, token?: string, user_agent?: string}


### Properties
```php
/**
 * @var int|string|null
 */
protected $id;

/**
 * @var string
 */
protected $token;

/**
 * @var string
 */
protected $userAgent;

```

### Methods

```php
public function __construct( mixed $payload );
```
Accepts either the raw JSON cookie value (string) or the already
decoded associative array. Malformed input degrades to an empty
payload so callers can read getters without null-guarding.


```php
public function getId(): int | string | null;
```



```php
public function getToken(): string;
```



```php
public function getUserAgent(): string;
```





## Auth\Internal\Options ![Final](../assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Internal/Options.zep)


-   __Namespace__

    - `Phalcon\Auth\Internal`

-   __Uses__
    
    - `Phalcon\Auth\Exception`
    - `Phalcon\Contracts\Container\Service\Collection`
    - `Phalcon\Di\DiInterface`

-   __Extends__
    

-   __Implements__
    

Internal option-parsing helpers shared by adapter / guard fromOptions()
implementations. Not part of the public API.


### Methods

```php
public static function arrayOption( array $options, string $key, array $defaultValue ): array;
```
@phpstan-param array<string, mixed>                              $options
@phpstan-param list<array{id?: int|string}&array<string, mixed>> $defaultValue

@phpstan-return list<array{id?: int|string}&array<string, mixed>>


```php
public static function requireString( array $options, string $key, string $context ): string;
```
@phpstan-param array<string, mixed> $options

@throws Exception


```php
public static function resolveService( mixed $container, string $serviceId, string $context ): object;
```
@template T of object

@phpstan-param class-string<T> $serviceId

@phpstan-return T

@throws Exception


```php
public static function stringOrNull( array $options, string $key ): string | null;
```





## Auth\Manager 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Manager.zep)


-   __Namespace__

    - `Phalcon\Auth`

-   __Uses__
    
    - `Phalcon\Auth\Access\AccessLocator`
    - `Phalcon\Contracts\Auth\Access\Access`
    - `Phalcon\Contracts\Auth\Adapter\Adapter`
    - `Phalcon\Contracts\Auth\AuthUser`
    - `Phalcon\Contracts\Auth\Guard\Guard`
    - `Phalcon\Contracts\Auth\Guard\GuardStateful`
    - `Phalcon\Contracts\Auth\Manager`

-   __Extends__
    

-   __Implements__
    
    - `ManagerContract`

Composes guards (authentication) and access gates (authorization)
behind a single facade. Guard-specific behavior is reached through
Manager::guard(); callers narrow with instanceof against the
relevant capability interface (GuardStateful, BasicAuth, etc.).

@phpstan-import-type AuthCredentials from Adapter


### Properties
```php
/**
 * @var AccessLocator
 */
protected $accessFactory;

/**
 * @var Access | null
 */
protected $activeAccess;

/**
 * @var Guard | null
 */
protected $defaultGuard;

/**
 * @var array<string, Guard>
 */
protected $guards;

```

### Methods

```php
public function __construct( AccessLocator $accessFactory );
```



```php
public function access( string $accessName ): self;
```
@throws Exception


```php
public function addAccessList( array $accessList ): self;
```
@phpstan-param array<string, class-string<Access>> $accessList


```php
public function addGuard( string $nameGuard, Guard $guard, bool $isDefault = bool ): self;
```



```php
public function attempt( array $credentials = [], bool $remember = bool ): bool;
```
@phpstan-param AuthCredentials $credentials

@throws Exception


```php
public function check(): bool;
```



```php
public function except( string $actions ): self;
```
@throws Exception


```php
public function getAccess(): Access | null;
```



```php
public function getAccessList(): array;
```



```php
public function getDefaultGuard(): Guard | null;
```



```php
public function getGuards(): array;
```



```php
public function guard( string $name = null ): Guard;
```
@throws Exception


```php
public function id(): int | string | null;
```



```php
public function logout(): void;
```



```php
public function only( string $actions ): self;
```
@throws Exception


```php
public function setAccess( Access $access ): self;
```



```php
public function setDefaultGuard( Guard $guard ): self;
```



```php
public function user(): AuthUser | null;
```



```php
public function validate( array $credentials = [] ): bool;
```
@phpstan-param AuthCredentials $credentials




## Auth\ManagerFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/ManagerFactory.zep)


-   __Namespace__

    - `Phalcon\Auth`

-   __Uses__
    
    - `Phalcon\Auth\Access\AccessLocator`
    - `Phalcon\Auth\Adapter\AdapterLocator`
    - `Phalcon\Auth\Guard\GuardLocator`
    - `Phalcon\Config\ConfigInterface`
    - `Phalcon\Contracts\Auth\Access\Access`
    - `Phalcon\Contracts\Auth\Adapter\Adapter`
    - `Phalcon\Contracts\Auth\Guard\Guard`
    - `Phalcon\Contracts\Container\Service\Collection`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Encryption\Security`

-   __Extends__
    

-   __Implements__
    

Single entry-point factory that builds a fully wired Phalcon\Auth\Manager
from a config tree. Framework-shared services (RequestInterface,
CookiesInterface, SessionManagerInterface) are resolved from the injected
container so the manager wires against the real application singletons,
not separately constructed copies.

 [
     'guards' => [
         'web' => [
             'type'    => 'session',
             'default' => true,
             'adapter' => [
                 'name'    => 'model',
                 'options' => [
                     'model' => User::class
                 ],
             ],
             'options' => [],
         ],
         'api' => [
             'type'    => 'token',
             'adapter' => [
                 'name'    => 'model',
                 'options' => [
                     'model' => User::class
                 ]
             ],
             'options' => [
                 'inputKey'   => 'api_token',
                 'storageKey' => 'api_token'
             ],
         ],
     ],
     'access' => [
         'auth'  => \Phalcon\Auth\Access\Auth::class,
         'guest' => \Phalcon\Auth\Access\Guest::class,
     ],
 ]

@phpstan-type GuardConfig array{
    type: string,
    default?: bool,
    adapter: array{name: string, options?: array<string, mixed>},
    options?: array<string, mixed>,
}

@phpstan-type AuthConfig array{
    guards?: array<string, GuardConfig>,
    access?: array<string, class-string<Access>>,
}


### Properties
```php
/**
 * @var AccessLocator
 */
protected $accessLocator;

/**
 * @var AdapterLocator
 */
protected $adapterLocator;

/**
 * @var Collection
 */
protected $container;

/**
 * @var GuardLocator
 */
protected $guardLocator;

/**
 * @var Security
 */
protected $hasher;

```

### Methods

```php
public function __construct( Security $hasher, mixed $container, AdapterLocator $adapterLocator = null, GuardLocator $guardLocator = null, AccessLocator $accessLocator = null );
```



```php
public function load( mixed $config ): Manager;
```
@phpstan-param AuthConfig|ConfigInterface $config

@throws Exception


```php
protected function buildAdapter( AdapterLocator $locator, array $cfg ): Adapter;
```



```php
protected function buildGuard( GuardLocator $locator, string $type, Adapter $adapter, array $options ): Guard;
```





## Auth\Mvc\AuthDispatcherListener 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Mvc/AuthDispatcherListener.zep)


-   __Namespace__

    - `Phalcon\Auth\Mvc`

-   __Uses__
    
    - `Phalcon\Auth\AbstractAuthDispatcherListener`
    - `Phalcon\Auth\Exception`
    - `Phalcon\Events\Event`
    - `Phalcon\Mvc\Dispatcher`

-   __Extends__
    
    `AbstractAuthDispatcherListener`

-   __Implements__
    

Listener that enforces the active Phalcon\Auth access gate on each MVC
dispatch. Attach to the events manager:

  $eventsManager->attach('dispatch', new AuthDispatcherListener($manager));

No-op when no active access has been set on the manager.


### Methods

```php
public function beforeExecuteRoute( Event $event, Dispatcher $dispatcher ): bool;
```
@throws Exception


```php
protected function getActionType(): string;
```



