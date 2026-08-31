---
layout: default
title: 'Phalcon\Mvc\Model\Transaction'
---
# Class **Phalcon\Mvc\Model\Transaction**

*implements* [Phalcon\Mvc\Model\TransactionInterface](Phalcon_Mvc_Model_Transaction.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/transaction.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Transactions are protective blocks where SQL statements are only permanent if they can
all succeed as one atomic action. Phalcon\Transaction is intended to be used with Phalcon_Model_Base.
Phalcon Transactions should be created using Phalcon\Transaction\Manager.

```php
<?php

try {
    $manager = new \Phalcon\Mvc\Model\Transaction\Manager();

    $transaction = $manager->get();

    $robot = new Robots();

    $robot->setTransaction($transaction);

    $robot->name       = "WALL·E";
    $robot->created_at = date("Y-m-d");

    if ($robot->save() === false) {
        $transaction->rollback("Can't save robot");
    }

    $robotPart = new RobotParts();

    $robotPart->setTransaction($transaction);

    $robotPart->type = "head";

    if ($robotPart->save() === false) {
        $transaction->rollback("Can't save robot part");
    }

    $transaction->commit();
} catch(Phalcon\Mvc\Model\Transaction\Failed $e) {
    echo "Failed, reason: ", $e->getMessage();
}

```


## Methods
public  **__construct** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector, [*boolean* $autoBegin], [*string* $service])

Phalcon\Mvc\Model\Transaction constructor



public  **setTransactionManager** ([Phalcon\Mvc\Model\Transaction\ManagerInterface](Phalcon_Mvc_Model_Transaction.md) $manager)

Sets transaction manager related to the transaction



public  **begin** ()

Starts the transaction



public  **commit** ()

Commits the transaction



public *boolean* **rollback** ([*string* $rollbackMessage], [[Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $rollbackRecord])

Rollbacks the transaction



public  **getConnection** ()

Returns the connection related to transaction



public  **setIsNewTransaction** (*mixed* $isNew)

Sets if is a reused transaction or new once



public  **setRollbackOnAbort** (*mixed* $rollbackOnAbort)

Sets flag to rollback on abort the HTTP connection



public  **isManaged** ()

Checks whether transaction is managed by a transaction manager



public  **getMessages** ()

Returns validations messages from last save try



public  **isValid** ()

Checks whether internal connection is under an active transaction



public  **setRollbackedRecord** ([Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $record)

Sets object which generates rollback action




<hr>

# Class **Phalcon\Mvc\Model\Transaction\Exception**

*extends* class [Phalcon\Mvc\Model\Exception](Phalcon_Mvc_Model.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/transaction/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Mvc\Model\Transaction\Failed**

*extends* class [Phalcon\Mvc\Model\Transaction\Exception](Phalcon_Mvc_Model_Transaction.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/transaction/failed.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class will be thrown to exit a try/catch block for isolated transactions


## Methods
public  **__construct** (*mixed* $message, [[Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $record])

Phalcon\Mvc\Model\Transaction\Failed constructor



public  **getRecordMessages** ()

Returns validation record messages which stop the transaction



public  **getRecord** ()

Returns validation record messages which stop the transaction



final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Mvc\Model\Transaction\Manager**

*implements* [Phalcon\Mvc\Model\Transaction\ManagerInterface](Phalcon_Mvc_Model_Transaction.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/transaction/manager.zep" class="btn btn-default btn-sm">Source on GitHub</a>

A transaction acts on a single database connection. If you have multiple class-specific
databases, the transaction will not protect interaction among them.

This class manages the objects that compose a transaction.
A transaction produces a unique connection that is passed to every
object part of the transaction.

```php
<?php

try {
   use Phalcon\Mvc\Model\Transaction\Manager as TransactionManager;

   $transactionManager = new TransactionManager();

   $transaction = $transactionManager->get();

   $robot = new Robots();

   $robot->setTransaction($transaction);

   $robot->name       = "WALL·E";
   $robot->created_at = date("Y-m-d");

   if ($robot->save() === false){
       $transaction->rollback("Can't save robot");
   }

   $robotPart = new RobotParts();

   $robotPart->setTransaction($transaction);

   $robotPart->type = "head";

   if ($robotPart->save() === false) {
       $transaction->rollback("Can't save robot part");
   }

   $transaction->commit();
} catch (Phalcon\Mvc\Model\Transaction\Failed $e) {
   echo "Failed, reason: ", $e->getMessage();
}

```


## Methods
public  **__construct** ([[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector])

Phalcon\Mvc\Model\Transaction\Manager constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injection container



public  **getDI** ()

Returns the dependency injection container



public  **setDbService** (*mixed* $service)

Sets the database service used to run the isolated transactions



public *string* **getDbService** ()

Returns the database service used to isolate the transaction



public  **setRollbackPendent** (*mixed* $rollbackPendent)

Set if the transaction manager must register a shutdown function to clean up pendent transactions



public  **getRollbackPendent** ()

Check if the transaction manager is registering a shutdown function to clean up pendent transactions



public  **has** ()

Checks whether the manager has an active transaction



public  **get** ([*mixed* $autoBegin])

Returns a new \Phalcon\Mvc\Model\Transaction or an already created once
This method registers a shutdown function to rollback active connections



public  **getOrCreateTransaction** ([*mixed* $autoBegin])

Create/Returns a new transaction or an existing one



public  **rollbackPendent** ()

Rollbacks active transactions within the manager



public  **commit** ()

Commits active transactions within the manager



public  **rollback** ([*boolean* $collect])

Rollbacks active transactions within the manager
Collect will remove the transaction from the manager



public  **notifyRollback** ([Phalcon\Mvc\Model\TransactionInterface](Phalcon_Mvc_Model_Transaction.md) $transaction)

Notifies the manager about a rollbacked transaction



public  **notifyCommit** ([Phalcon\Mvc\Model\TransactionInterface](Phalcon_Mvc_Model_Transaction.md) $transaction)

Notifies the manager about a committed transaction



protected  **_collectTransaction** ([Phalcon\Mvc\Model\TransactionInterface](Phalcon_Mvc_Model_Transaction.md) $transaction)

Removes transactions from the TransactionManager



public  **collectTransactions** ()

Remove all the transactions from the manager




<hr>

# Interface **Phalcon\Mvc\Model\Transaction\ManagerInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/transaction/managerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **has** ()

...


abstract public  **get** ([*mixed* $autoBegin])

...


abstract public  **rollbackPendent** ()

...


abstract public  **commit** ()

...


abstract public  **rollback** ([*mixed* $collect])

...


abstract public  **notifyRollback** ([Phalcon\Mvc\Model\TransactionInterface](Phalcon_Mvc_Model_Transaction.md) $transaction)

...


abstract public  **notifyCommit** ([Phalcon\Mvc\Model\TransactionInterface](Phalcon_Mvc_Model_Transaction.md) $transaction)

...


abstract public  **collectTransactions** ()

...



<hr>

# Interface **Phalcon\Mvc\Model\TransactionInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/transactioninterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setTransactionManager** ([Phalcon\Mvc\Model\Transaction\ManagerInterface](Phalcon_Mvc_Model_Transaction.md) $manager)

...


abstract public  **begin** ()

...


abstract public  **commit** ()

...


abstract public  **rollback** ([*mixed* $rollbackMessage], [*mixed* $rollbackRecord])

...


abstract public  **getConnection** ()

...


abstract public  **setIsNewTransaction** (*mixed* $isNew)

...


abstract public  **setRollbackOnAbort** (*mixed* $rollbackOnAbort)

...


abstract public  **isManaged** ()

...


abstract public  **getMessages** ()

...


abstract public  **isValid** ()

...


abstract public  **setRollbackedRecord** ([Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $record)

...
